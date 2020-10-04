import * as React from "react";

import Input from "../components/Input";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button } from "../components/Button";

class UploadPage extends React.Component {
  render() {
    return (
      <div className="flex fixed items-center w-screen h-screen">
        <div className="block w-64 m-auto">
          <div className="text-3xl font-extrabold">Upload a Video</div>
          <Input
            placeholder="Video Name"
            icon={AiOutlineCloudUpload}
            value={""}
            onChange={null}
          />
          <div className="flex flex-row w-full">
            <Button
              text="Video"
              className="flex-1 w-full my-2 mr-1"
              onClick={null}
            />
            <Button
              text="Thumbnail"
              className="flex-1 w-full my-2 ml-1"
              color="bg-yellow-600"
              onClick={null}
            />
          </div>
          <Button
            text="Create &amp; Upload Video"
            className="flex-1 w-full"
            color="bg-green-600"
            onClick={null}
          />
        </div>
      </div>
    );
  }
}

export default UploadPage;
