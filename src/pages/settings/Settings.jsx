import { useState } from "react";
import "./settings.css";

function Settings() {
  const [file, setFile] = useState("");
  function getBase64(e) {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
  const finalPic = `url(${file})`;
  const dfile =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80";
  return (
    <div className="setting-home">
      <div className="setting-user-pic">
        <input
          className="file-drop"
          title=" "
          accept="image/png, image/jpeg, image/jpg"
          onChange={getBase64}
          style={
            file.length > 0
              ? { backgroundImage: finalPic }
              : { backgroundImage: dfile }
          }
          type="file"
        />
      </div>
      <h3>Change Profile Details:</h3>
      <div className="settings-user-profile-data">
        <input type="email" name="Email" placeholder="Email.." />
        <input type="text" name="Name" placeholder="Name" />
        <input type="password" name="Password" placeholder="Old Password.." />
        <input type="password" name="NewPassword" placeholder="New Password.." />
      </div>
      <h3>Change Address Details:</h3>
      <div className="setting-user-addr-data">
        <input type="text" name="dr-no" placeholder="Door No" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="district" placeholder="District" />
        <select name="" id="">
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <input type="number" name="Postalcode" placeholder="Postal Code" />
        <input type="text" disabled  placeholder="India"/>
        <input type="number" placeholder="Mobile No" />
      </div>
      <button className="set-btn">Update</button>
    </div>
  );
}

export default Settings;
