import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post('/api/auth/signup', form);
    if (res.data.success) setLoading(false); router.push('/auth/login');

  };





  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white w-50">
        <h3 className="text-center mb-4" style={{ color: "orange" }}>Register</h3>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="First-Name  Last-Name"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            onChange={e => setForm({ ...form, role: e.target.value })}
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn w-100 text-white"
          style={{ backgroundColor: "orange" }}
        >{loading ? "Registering..." : "Register"}
        </button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>
    </div>

  );
}
