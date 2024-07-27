import React, { useState, useEffect } from 'react';
import Switch from './Switch';
import audioFile from './Doremon.mp3';

export default function Window() {
  const [hrs, setHrs] = useState('12');
  const [min, setMin] = useState('00');
  const [m, setM] = useState('am');
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOn) {
      const currentTime = `${hrs}:${min} ${m.toUpperCase()}`;
      if (time === currentTime) {
        AudioPlayer();
        console.log(currentTime);
        console.log(time);
      }
    }
  }, [time, hrs, min, m, isOn]);

  const AudioPlayer = () => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  const toggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className='d-flex justify-content-center position-absolute' style={{top:'20%', left:'41%', height: '100vh' }}>
      <div className="d-flex justify-content-center" style={{ backgroundColor: '#373535', height: '30vh', width: '35vh', boxShadow: '30px 30px 30px', border: '5px solid #504f4f', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ width: '33vh', height: '0.1px', backgroundColor: 'white', position: 'absolute', top: '30%' }}></div>

        {/* Timing container */}
        <div style={{ height: '65px', width: '35vh', backgroundColor: '#373535', position: 'absolute', borderRadius: '15px', color: 'white' }}>
          <p className='time' style={{ position: 'absolute', left: '4%', top: '0%', display: 'inline-block', marginTop: '10px', marginLeft: '10px', fontSize: '20px', marginBottom: '0px' }}>{hrs}:{min}</p>

          <p style={{ position: 'absolute', left: '27%', top: '27%', display: 'inline-block', margin: '0px ', fontSize: '13px' }}>{m}</p>
          <p style={{ position: 'absolute', left: '75%', top: '0%', display: 'inline-block', margin: '0px ', fontSize: '13px' }}>{time}</p>
          <p style={{ position: 'absolute', left: '5%', top: '68%', margin: '-8px 0px 0px 12px ', fontSize: '13px' }}>Once</p>

          <Switch toggle={toggle} style={{ position: 'absolute', left: '6%' }} isOn={isOn} />
        </div>

        <select id="hours"
          style={{
            position: 'absolute', top: '49%', left: '42%', backgroundColor: '#373535', fontSize: '20px', color: 'white', border: 'none',
            background: '#373535',
            appearance: 'none', height: '30px', width: '30px'
          }}
          value={hrs}
          onChange={(e) => setHrs(e.target.value)}>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <select id="minute"
          style={{
            position: 'absolute', top: '49%', left: '60%', backgroundColor: '#373535', fontSize: '20px', color: 'white', border: 'none',
            background: '#373535',
            appearance: 'none', height: '30px', width: '30px'
          }}
          value={min}
          onChange={(e) => setMin(e.target.value)}>
             <option value="60">00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="48">48</option>
          <option value="49">49</option>
          <option value="50">50</option>
          <option value="51">51</option>
          <option value="52">52</option>
          <option value="53">53</option>
          <option value="54">54</option>
          <option value="55">55</option>
          <option value="56">56</option>
          <option value="57">57</option>
          <option value="58">58</option>
          <option value="59">59</option>
        </select>

        <select id="m"
          style={{
            position: 'absolute', top: '49%', left: '24%', backgroundColor: '#373535', fontSize: '19px', color: 'white', border: 'none',
            background: '#373535',
            appearance: 'none', height: '30px', width: '30px'
          }}
          value={m}
          onChange={(e) => setM(e.target.value)}>
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>

        <div style={{ height: '12vh', width: '0.1px', top: '40%', left: '38%', backgroundColor: 'white', position: 'absolute' }}></div>
        <div style={{ height: '12vh', width: '0.1px', top: '40%', left: '55%', backgroundColor: 'white', position: 'absolute' }}></div>

      </div>
    </div>
  );
}
