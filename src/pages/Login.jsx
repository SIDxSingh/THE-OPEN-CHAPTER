import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="auth-page">
      <section className="section bg-light" style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center' }}>
        <div className="section-container" style={{ width: '100%' }}>
          <div className="auth-card">
            <h2 className="text-center">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
            <p className="text-center text-small mt-2 mb-4">
              {isLogin ? 'Login to view your saved books and orders.' : 'Join our literary community today.'}
            </p>
            
            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-control" placeholder="John Doe" />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" placeholder="••••••••" />
              </div>
              <button type="submit" className="btn-primary w-100 mt-3">
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
            
            <div className="auth-toggle text-center mt-4">
              <span className="text-small">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  className="btn-link" 
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign up here' : 'Login here'}
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
