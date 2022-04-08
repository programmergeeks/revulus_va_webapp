import '../css/home.css';

export default function Home() {
  return (
    <div id='home' className='row d-flex align-items-center justify-content-center'>
      <div className="col-9 text-center">
        <h3 className='intro'>Welcome to</h3>
        <h1 className='business_title'>Revulus VA</h1>
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis pharetra ac lacus et volutpat. Aliquam erat volutpat. Nullam tincidunt id elit vel
          congue. Donec feugiat justo in lacinia tristique. Donec at imperdiet turpis. Sed luctus
          ipsum vitae imperdiet elementum. Nam consequat sit amet enim id sollicitudin.
          <br /><br /><br />
          Ut ut pharetra elit. Morbi hendrerit et quam vitae scelerisque.
        </span>
        <br />
        <button type="button" className="btn btn-outline-bookdemo btn-lg text-nowrap">Book Demo Today</button>
        <button type="button" className="btn btn-outline-learnmore btn-lg text-nowrap">Learn More</button>
      </div>
    </div>
  )
}
