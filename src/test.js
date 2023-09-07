<div className="instagram">
<h2>Join 21k+ parents, athletes, and professionals <br/> 
Follow <a target='_' href="https://www.instagram.com/x.rishi/">@x.rishi</a> on Instagram</h2>
<div className="insta-feed">

<a target='_' href="https://www.instagram.com/p/Cw1XsfyvIC_/?img_index=1">
<div className="ip"> <img src={i1} alt="" className='feed-post' /></div></a>

<a target='_' href="https://www.instagram.com/p/Cwt6AJFvhtL/">
<div className="ip">
    <img src={i2} alt="" className='feed-post' />
  </div> 
  </a>

<a target='_' href="https://www.instagram.com/p/Cwklr9vNyed/">
<div className="ip">
<img src={i3} alt="" className='feed-post' />
</div> 
</a>

<a target='_' href="https://www.instagram.com/p/CwhR-EKtjcn/">
<div className="ip">
<img src={i4} alt="" className='feed-post' />
</div> 
</a>

<a target='_' href="https://www.instagram.com/p/CwfcXW1NjC9/">
<div className="ip">
<img src={i5} alt="" className='feed-post' />
</div> 
</a>

<a target='_' href="https://www.instagram.com/p/CwbmOwStbyk/">
<div className="ip">
<img src={i6} alt="" className='feed-post' />
</div> 
</a>

  </div>
 <a target='_' href="https://www.instagram.com/x.rishi/">
   <p className='more-posts'>See more posts.</p>
 </a>
</div>




.insta-feed .ip{
    height: 250px;
    width: 300px;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden; 
    position: relative; 
}
.insta-feed .feed-post{
    height: 100%;
    width: 100%;
    object-fit: cover; 
    transition: transform 0.3s ease;
}
.insta-feed .feed-post:hover{
    transform: scale(1.1);
}
.Feed .instagram{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    background-color: white;
    width: 100%;
    padding: 1rem 0;
}
.instagram .insta-feed{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    width: 70%;
}
.insta-feed .ig{
   border-radius: 1rem;
}
.instagram .more-posts{
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s ease-in;
}
.instagram .more-posts:hover{
    color:#ED5009 ;
}

