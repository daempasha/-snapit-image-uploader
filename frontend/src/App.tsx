import React from 'react';
import Card from 'components/Card/card.component';
import CardContainer from 'components/CardContainer/cardcontainer.component';

function App() {
  return (
    <div className="bg-gray-200 flex flex-col min-h-screen h-screen">

      <main className='flex-1 w-full'>

        <CardContainer> 
          <Card>
            <h1 className="text-center font-bold text-lg">Upload your image</h1>
            <p className="text-sm">File should be .jpeg, .png</p>
          </Card>

        </CardContainer>

      </main>
      <footer className='text-center text-gray-500 py-5'>
        created by <a className='underline font-bold hover:text-gray-600 transition-all' rel="noreferrer" target="_blank" href="https://github.com/daempasha">daempasha</a>
      </footer>
    </div>
  );
}

export default App;
