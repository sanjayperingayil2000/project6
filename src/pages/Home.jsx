import React from 'react';
import Header from '../components/header';
import '../index.css';
import Latest from '../components/latest';
import More from '../components/more';
import '../app.css'
import More1 from '../components/more1';
import Last from '../components/last';

export default function Home() {
  return (
    <>
    <Header />
    <div className='flex1'>
      <div className='cont1'>
        <span className='imgtxt1 hhd'>Love of violet</span>
        <h4 className='line'>Hiii everyone...</h4>
      </div>
      <div className='cont2'>
        <div className='cont3'>
        <span className='imgtxt2 hhd1'>Love of violet</span>
        <h6 className='line1'>Hiii everyone...</h6>
        </div>
        <div className='cont3'>
        <span className='imgtxt2 hhd1'>Love of violet</span>
        <h6 className='line1 ll1'>Hiii everyone...</h6>
        </div>
      </div>
    </div>
    <br /><br />
    <h2>The Latest</h2>
    <div className='blne'></div> <br />
    <div className='d-flex justify-content-between ss1'>
      <Latest /><Latest /><Latest />
    </div><br /><br />
    <h2>Want to know more</h2>
    <div className='blne'></div> <br />
    <div className='d-flex justify-content-between'>
    <div className='inl st65' >
    <More /> <More /> <More /><More /><More /><hr />
    <br /><br />
    <div className='picb'>
        <span className='btxt ttp'>
            <h1>You see Trees !!</h1>
            <h2>We see heaven of peacefulness</h2>
        </span>
    </div>
    </div>
    <div className='inl' id='fff' >
      <div className='ad'>
        <span className='vrt'>Advertisement</span>
      </div>
      <br /><br/>
      <h2>Top Views</h2>
      <div className='blne'></div> <br />
      <div className='img11'></div>
      <div>
        <br/>
        <h3>Enjoy the moments</h3>
        For other uses, see Mother Earth. For the song, see Mother Nature.For environmental organization, see Mother Nature Cambodia.
        <br /><br/>Travel / <font style={{color:"#0202"}}> I like these in 2020</font>
      </div>
      <More1 /><More1 /><br/><hr/>
    </div>
    </div>
    <h2>The Latest</h2>
    <div className='blne'></div>
    <hr/><br/>
    <div className='d-flex justify-content-around'>
        <Last/><Last/><Last/>
    </div><br/><br/><hr/>
    <br /><br />
    </>
  )
}
