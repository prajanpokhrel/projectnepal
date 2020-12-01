<template>
    <div>
        <!-- header -->
    <section class="header">
        <div class="topheader">
            <div class="container">
               <div>
                    <img class="logo" src="assets/images/Group.png">
                    <nav class="navbar navbar-right">
                        <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <i class="fa fa-bars" ></i>
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="index.html">Home<span class="sr-only">(current)</span></a></li>
                                <li><a href="Bylocation.html">By location</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#"><i class="fas fa-sign-in-alt"></i> Signin/Register</a></li>
                                <li><a href="canberrapost.html" class=" btn btn-default"><span class="black">Post An Ad</span></a></li> 
                        </ul>
                        </div><!-- /.navbar-collapse -->
                    </div><!-- /.container-fluid -->
                    </nav>
                </div>
            </div>
        </div>
    </section>
     <section class="home">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                     <div class="col-md-8">
                         <a class="homelink " href="#">Home</a><span class="homelink text"> > Canberra</span>
                         <div class="box-shape">
                            <a href="#"><img  src="assets/images/Oval (1).png"></a> 
                            <span class="view"><a href="#">Views</a><span class="views">:123</span></span>
                            <span class=" box-text">Alexandre Paiva</span>
                            <p class="small-content textside">Canberra, Australia</p>
                            <div>
                               <span class="postdetail"><a href="#">Post ID</a> <span class="views">: 23</span> </span><span class="postdetail"><a href="#">Post Date</a><span class="views">: August 19 at 4:46 PM</span></span><span class="postdetail"> <a href="#">Expire On </a><span class="views">: August 19 at 4:46 PM</span></span>
                                <p class="post-text">I'm Driving to Sydney from Canberra this moring Anyone wants lift?? Comment Below I will get back to you Thanks</p>
                                <button type="button" class="btn btn-info message-btn">Send Message</button>
                            </div>
                         </div>
                         <div class=" col-md-12 box-shape small-box-shape">
                           <div class="col-md-10">
                              <a class="share-btn" href="#">Share</a>
                              <span class="social-media"><a href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"> <i class="fab fa-twitter"></i></a></span>
                           </div>
                         </div>
                      </div>
                        <div class="col-md-4 most-view">
                             <span class="topic">Most Views Today</span>
                            <div class="box-shape">
                              <div class=" information box-information">
                                <a href="#"><img class="small-img" src="assets/images/Bitmap.svg"></a>
                                <h5 class="image-content text-left ">2015 Ford Focus2.0 TDCi 185 ST-2 5dr<br> Manual Diesel Hatchback</h5>
                                <p class="small-content">Walthamstow,london</p>
                                <span class="price">$3599.00</span>
                              </div>
                             <div class=" information box-information">
                                <a href="#"><img class="small-img" src="assets/images/room.png"></a>
                                 <h5 class="image-content ">Homeless Free accommodation Modern <br>Room En-suits Studio</h5>
                                 <p class="small-content">Isel of Dogs,London</p>
                                 <span class="price">$840.00</span>
                              </div>
                             <div class=" information box-information">
                                <a href="#"><img class="small-img" src="assets/images/dogs.png"></a>
                                <h5 class="image-content ">Minature dachshunds puppy</h5>
                                <p class="small-content">Evesham,Worcestershire</p>
                                <span class="price">$590.00</span>
                             </div>
                             <div class=" information box-information">
                                <a href="#"><img class="small-img" src="assets/images/bit.png"></a>
                                <h5 class="image-content ">Belfast City CityCentre,Belfast</h5>
                                <p class="small-content">Evesham,Worcestershire</p>
                                <span class="price">$749.00</span>
                             </div>
                          </div>
                       </diV>
                  </div>  
             </div>
          </div>
     </section>
     <section class="list-items">
        <div class="container">
            <div class="row">
               <div class="col-md-12 items ">
                   <div class="col-md-2 list">
                     <a href="#"><p class="items-number">Canbera(19 Items)</p></a>
                   </div>
                   <div class="col-md-2">
                      <a href="#"> <p class="items-number">Sydney(16 Items)</p></a>
                   </div>
                   <div class="col-md-2">
                       <a href="#"> <p class="items-number">Sydney(16 Items)</p></a>
                   </div>
                   <div class="col-md-2">
                    <a href="#"><p class="items-number">Darwin(13 Items)</p></a>
                   </div>
                   <div class="col-md-2">
                      <a href="#"><p class="items-number">Perth(43 Items)</p></a>
                   </div>
               </div>
            </div>
        </div>
     </section>
    </div>
</template>
<script>
export default {
    name:'Homepage'
}
</script>