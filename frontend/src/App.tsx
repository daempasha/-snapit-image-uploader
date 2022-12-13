import React from 'react';
import Card from 'components/Card/card.component';
import CardContainer from 'components/CardContainer/cardcontainer.component';
import Dropzone from 'components/Dropzone/dropzone.component';
import { useStore } from 'store';
import Uploading from 'components/Uploading/uploading.component';
import Uploaded from "components/Uploaded/uploaded.component"
import { Toaster } from "react-hot-toast";
function App() {
  const state = useStore(store => store.state);
  return (
    <>
      <Toaster />
      <div className="bg-gray-200 flex flex-col min-h-screen h-screen font-sans">

        <main className='flex-1 w-full'>

          <CardContainer>
            {state === 'upload' &&
              <Card>
                <h1 className="text-center font-medium text-xl">Upload your image</h1>
                <p className="text-center text-xs my-3 text-gray-500">File should be .jpeg, .png</p>
                <Dropzone />
              </Card>
            }

            {state === "uploading" && <Uploading />}

            {state === "uploaded" && <Uploaded />}
          </CardContainer>

        </main>
        <footer className='text-center text-gray-500 py-5'>
          created by <a className='underline font-bold hover:text-gray-600 transition-all' rel="noreferrer" target="_blank" href="https://github.com/daempasha">daempasha</a>
        </footer>
      </div>
    </>
  );
}

export default App;
