import React from 'react'

function Application() {
  return (
    <>
    <h1>Application Form </h1>
    <h2>Fill the form below to apply</h2>
    <p>All fields are mandatory</p>
    <span title='close'>x</span>
    <img src='https://via.placeholder.com/150' alt='Placeholder Image' />
    <div data-testid='custom-element'>Custom HTML Element</div>
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder='Full name' value='Jagadeesh' onChange={() => {}}/>
        </div>
        <div>
            <label htmlFor='bio'>Bio:</label>
            <textarea id='bio' name='bio' rows={4} cols={50} />
        </div>
        <div>
            <label htmlFor='job-location'>Username:</label>
            <select id='job-location' name='job-location'>
                <option value=''>Select a country</option>
                <option value='in'>India</option>
                <option value='us'>USA</option>
                <option value='uk'>UK</option>
                <option value='aus'>Australia</option>
            </select>
        </div>
        <div>
            <label htmlFor='terms'>
                <input type='checkbox' id='terms' name='terms' />
                I agree to the terms and conditions
            </label>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Application