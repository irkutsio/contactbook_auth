export const Login = () => {
  return (
    <form>
      <div
        style={{
          width: 400,
          backgroundColor: 'beige',
          padding: 16,
          borderRadius: 8,
          border: '2px solid red',
        }}
      >
        <h1>Login</h1>

        <div>
          {' '}
          <label>Email address</label>
          <input
            type="email"
            name="email"
            style={{ marginBottom: 24, marginLeft: 16 }}
          />
        </div>

        <div>
          {' '}
          <label>Passwords</label>
          <input
            type="password"
            name="password"
            style={{ marginBottom: 24, marginLeft: 16 }}
          />
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};
