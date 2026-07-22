const Form=()=> {
  return (
    <form>
      <div>
        <h2>Personal Details</h2>

        <ol>
          <li>
            <label>Enter Form Filling Date & Time</label>
            <input type="datetime-local" />
          </li>

          <br />

          <li>
            <label>Enter your Name</label>
            <input type="text" placeholder="BLOCK LETTER" />
          </li>

          <br />

          <li>
            <label>Enter Your Age</label>
            <input type="number" placeholder="Enter Age" />
          </li>

          <br />

          <li>
            <label>Enter Mobile No</label>
            <input
              type="tel"
              minLength="10"
              maxLength="10"
              required
              placeholder="10 Digit Number"
            />
          </li>

          <br />

          <li>
            <label>Enter Mail Id</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </li>

          <br />

          <li>
            <label>Pick Gender</label>
            <input type="radio" name="gender" required /> Male
            <input type="radio" name="gender" required /> Female
          </li>

          <br />

          <li>
            <label>Pick Field</label>
            <input type="radio" name="field" required /> School Student
            <input type="radio" name="field" required /> College Student
            <input type="radio" name="field" required /> Employee
          </li>
        </ol>
      </div>

      <div>
        <h2>Mobile Usage Questions</h2>

        <ol>
          <li>
            <p>How many hours do you use your mobile daily?</p>

            <input type="radio" name="time" required /> Less than 2 hr
            <input type="radio" name="time" required /> 2–4 hr
            <input type="radio" name="time" required /> 4–6 hr
            <input type="radio" name="time" required /> More than 6 hr
          </li>

          <br />

          <li>
            <p>Which app do you use the most?</p>

            <input type="checkbox" name="apps" /> Instagram
            <input type="checkbox" name="apps" /> YouTube
            <input type="checkbox" name="apps" /> WhatsApp
            <input type="checkbox" name="apps" /> Snapchat
            <input type="checkbox" name="apps" /> Facebook
            <input type="checkbox" name="apps" /> LinkedIn
            <input type="checkbox" name="apps" /> Gaming Apps
          </li>

          <br />

          <li>
            <p>How often do you check your phone without notifications?</p>

            <input type="radio" name="use" required /> Very Often
            <input type="radio" name="use" required /> Sometimes
            <input type="radio" name="use" required /> Rarely
          </li>

          <br />

          <li>
            <p>Do you use your phone immediately after waking up?</p>

            <input type="radio" name="wake" required /> Yes
            <input type="radio" name="wake" required /> No
          </li>

          <br />

          <li>
            <p>Do you use your phone before sleeping?</p>

            <input type="radio" name="sleep" required /> Always
            <input type="radio" name="sleep" required /> Sometimes
            <input type="radio" name="sleep" required /> Never
          </li>

          <br />

          <li>
            <p>What changes would you like to make in your mobile usage habits?</p>

            <textarea cols="60" rows="3"></textarea>
          </li>

          <br />

          <li>
            <p>What do you think the world without mobile phone?</p>

            <p contentEditable={true}>Type here</p>
          </li>
        </ol>

        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default Form;