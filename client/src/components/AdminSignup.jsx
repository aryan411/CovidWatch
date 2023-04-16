
export default function AdminSignup() {
  return (
    <div class="containerSignup">
     
      <div class="signupdiv form">
        <h1 className="s-h1">Hospital/Clinic Signup</h1>
        <form className="signupForm" id="signup-form">
          <label for="name">Name:</label>
          <br />
          <input
          className="su-input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
          <br />
          <label for="email">Email:</label>
          <br />
          <input
           className="su-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <br />
          <label for="password">Password:</label>
          <br />
          <input
           className="su-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter a password"
            minlength="8"
            required
          />
          <br />
          <label for="confirm-password">Confirm Password:</label>
          <br />
          <input
           className="su-input"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm your password"
            minlength="8"
            required
          />
          <br />
          <label for="clinic-name">Clinic/Hospital Name:</label>
          <br />
          <input
           className="su-input"
            type="text"
            id="clinic-name"
            name="clinic-name"
            placeholder="Enter the name of your clinic/hospital"
            required
          />
          <br />
          <label for="clinic-address">Clinic/Hospital Address:</label>
          <br />
          <input
           className="su-input"
            type="text"
            id="clinic-address"
            name="clinic-address"
            placeholder="Enter the address of your clinic/hospital"
            required
          />
          <br />
          <button className="su-button" type="submit">Signup</button>
          <div class="error"></div>
        </form>
      </div>
    </div>
  );
}
