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
      <div className="setting-user-data">
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
    </div>
  );
}

export default Settings;
