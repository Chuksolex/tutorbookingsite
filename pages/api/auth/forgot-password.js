import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';
import sendMail from '../../../lib/mailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body;

  try {
    await dbConnect();

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'No user found with this email.' });
    }

    const token = Math.random().toString(36).substring(2);
    const expiry = Date.now() + 1000 * 60 * 30;

    user.resetToken = token;
    user.resetTokenExpiry = expiry;
    await user.save();

    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}&email=${email}`;

    await sendMail({
      to: email,
      subject: 'Reset your password',
      html: `<p>Click <Link href="${resetUrl}">here</Link> to reset your password. This link expires in 30 minutes.</p>`,
    });

    return res.status(200).json({ message: 'Reset link sent to your email.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error.' });
  }
}
