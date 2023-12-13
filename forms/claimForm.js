const claimForm = document.querySelector('.key-locker');

claimForm.innerHTML = `
  <h2>Key Claim Form</h2>
  <br>
  <p>Please fill out this form to possibly get your key. 
  <br>
  Remember there is only 10 keys available in a 24 hour time span. 
  <br>
  If you do not get a key, don't fret, you will still get something!</p>
  <br>
  <img src="https://png.pngtree.com/png-clipart/20210913/ourlarge/pngtree-realistic-golden-key-png-image_3914925.jpg" />
  <br>
  <br>
  <form action="" class="claim-form" method="post">
      <div class="claim-form-nav">
        <div class="form-wrapper">
        <label 
          htmlFor="name">Name:
        </label>
        <br>
        <input 
          type="text" 
          placeholder="Name">
        </input>
        <br>
        <label 
          htmlFor="email">Email:
        </label>
        <br>
        <input 
          type="text" 
          placeholder="Email">
        </input>
        <br>
        <label 
          htmlFor="phone">Phone:
        </label>
        <br>
        <input 
          type="text" 
          placeholder="Phone">
        </input>
        <br>
        <label 
          htmlFor="question3">
          Have you been you Trellis before? Or is this your first time being here?
        </label>
        <br>
        <textarea  
          type="text" 
          placeholder="Answer here please">
        </textarea>
        <br>
        <label 
          htmlFor="question6">
          Please feel free t leave us a review on either google or Yelp. Thank you for playing!:
        </label>
        <br>
        <textarea  
          type="text" 
          placeholder="Answer here please">
        </textarea>
        <br>
        <label 
          htmlFor="form-submit">Click Here
        </label>
        <br>
        <button 
          class="form-submit" 
          type="submit">Submit
        </button>
        </div>
      </div>
    </form>
`;