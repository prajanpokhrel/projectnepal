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
                             <li><a href="#" class=" btn btn-default"><span class="black">Post An Ad</span></a></li> 
                       </ul>
                    </div><!-- /.navbar-collapse -->
                  </div><!-- /.container-fluid -->
                  </nav>
               </div>
               </div>
            </div>
    </section>
    <!-- image -->
    <section class="image">
    </section>
 <section class="serach-form post-list">
    <div class="container">
       <div class="row">
              <div class=" col-md-12 looking-search" >
                <h3 class="main-image-text">I'am looking for</h3> 
                 <div  class="search-box">
                     <form>
                            <div class="form-group">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="What are you looking for?"><br>
                                    <span class="search-box-note">Popular search cars,pets,parking</span>
                               </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-4">
                                    <input type="text" class="form-control" placeholder="Postcode/Location">
                                 </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-2">
                                    <button type="button" class="btn btn-info  btn-block">Search</button>
                                </div>
                            </div>
                     </form>
                  </div> 
              </div>
         </div>
    </div>
</section>
<section class="post-list">
    <div class="container">
        <div class="row">
             <div class="col-md-12 ">
                 <div class="col-md-3">
                    <a class="homelink styling" href="#">Home</a><span class="homelink text styling"> > Canberra</span>
                      <div class=" postlist-box">
                          <span class="post-list-text">Price</span>
                          <form>
                             <div class="form-group">
                                <input type="number" class="form-controls" placeholder="max "> -
                                <input type="number" class="form-controls" placeholder="min">
                                <button type="button" class="btn btn-info go-btn">Go</button>
                             </div>
                          </form>
                              <hr>
                               <span class="post-list-text">Distance</span>
                              <form>
                                <div class="from-group">
                                    <input type="number" class="form-controls choose" placeholder="Choose Distance">
                                     <button type="button" class="btn btn-info go-btn">Go</button>
                                </div>
                            </form> 
                               <hr>
                             <span class="post-list-text">Categories</span>
                             <form>
                              <div class="form-check">
                                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                  <label class="form-check-label" for="exampleCheck1">Cars(6)</label>
                                </div>
                                <div class="form-check">
                                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                  <label class="form-check-label" for="exampleCheck1">Rent(4)</label>
                                </div>
                                 <div class="form-check">
                                   <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                   <label class="form-check-label" for="exampleCheck1">Job(4)</label>
                                 </div>
                             </form>
                              <hr>
                              <span class="post-list-text">Ad Types</span>
                              <form>
                                  <div class="form-check">
                                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                      <label class="form-check-label" for="exampleCheck1">Urgent Ads(10)</label>
                                    </div>
                                    <div class="form-check">
                                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                      <label class="form-check-label" for="exampleCheck1">Feature Ads(15)</label>
                                    </div>
                                     <div class="form-check">
                                       <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                       <label class="form-check-label" for="exampleCheck1">Ads with Pictures(153)</label>
                                     </div>
                                 </form>
                                 <hr>
                                 <span class="post-list-text">Seller Type</span>
                                   <br><br><br>
                                 <span class="private"><a href="#">Private(1166)</a></span>
                         </div>
                    </div> 
                  <div class="col-md-9">
                      <div class="box-shape  position">
                          <a href="#"><img  src="assets/images/Oval (1).png"></a> 
                          <span class="box-text">Alexandre Paiva</span ><span class="view date ">August 19 at 4:46 PM</span>
                          <p class="small-content  textside">Canberra, Australia</p>
                          <div>
                              <p class="post-text ">I'm Driving to Sydney from Canberra this moring Anyone wants lift?? Comment Below I will get back to you Thanks</p>
                          </div>
                       </div>  
                       <div class="box-shape  position">
                           <a href="#"> <img class="small-logo" src="assets/images/smalllogo.png"> </a>
                          <span class="view date">August 19 at 4:46 PM</span>
                          <span class="box-text">Vw jetta 1.9 tdi se 57 reg</span>
                          <p class="small-content textside">Canberra, Australia</p>
                         <div class="col-md-2">
                            <a href="#"><img class="images" src="assets/images/black car.png"> </a>
                           </div>
                           <div>
                               <p class="post-text long-texts">Remote cl ew ps alloys air con
                                Cd player mot full history drives well hpi clear call 07368 338401</p>
                          </div>
                            <p class="price">$749.00</p>
                      </div> 
                       <div class="box-shape  position">
                           <a href="#"><img src="assets/images/henry.png"></a> 
                          <span class="box-text">Henry Richardson</span ><span class="view date ">August 19 at 4:46 PM</span>
                          <p class="small-content  textside">Canberra, Australia</p>
                         <div>
                            <p class="post-text ">I am a "L" licence holder and need a full Australian licence holder to sit next to me and guide me Wednesday and Thursday at least for 2 hours a day. I will pay you for that. Anyone interested here can text in this number 23422233.</p>
                          </div>
                      </div> 
                      <div class="box-shape  position">
                        <a href="#"> <img  src="assets/images/vauxhall.png"> </a>
                       <span class="view date">August 19 at 4:46 PM</span>
                       <span class="box-text">Vauxhall Crossland X 1.2 Elite Nav 5dr</span>
                       <p class="small-content textside">Canberra, Australia</p>
                      <div class="col-md-2">
                         <a href="#"><img class="images" src="assets/images/whitecar.png"> </a>
                        </div>
                        <div>
                            <p class="post-text long-texts">Balance of Manufacturer Warranty., Satellite Navigation., Bluetooth., Rear Parking sensors., Dual Zone Climate Control., Automatic Lights., 2 x Keys with Car., 17" Alloy Wheels, DAB Digital Radio., Daytime Running Lights., Multi-Function Steering Wheel, Front Fog  
                            </p> <span class="price ">$749.00</span>
                       </div>
                        
                   </div>
                   <div class="box-shape  position">
                      <a href="#"><img  src="assets/images/it.png"> </a>
                       <span class="view date">August 19 at 4:46 PM</span>
                      <p class="box-text image-names">IT Project Management&Consultancy Services</p>
                       <p class="small-content textside">Canberra, Australia</p>
                     <div class="col-md-2">
                        <a href="#"><img class="images" src="assets/images/itproject.png"> </a>
                     </div>
                     <div>
                        <p class="post-text long-texts"> Project Team Consultancy Ltd. is offering your business PMP-certified project management and business analysis services in all kinds of Software projects that will ensure profitable digitalisation …  
                        </p>
                     </div>
                  </div>
                      <div class="box-shape  position">
                          <a href="#"> <img  src="assets/images/Oval (5).png"> </a>
                          <span class="view date">August 19 at 4:46 PM</span>
                           <p class="box-text image-names">Furnished Individual House in a quiet village (North of France)</p>
                           <p class="small-content textside">Canberra, Australia</p>
                          <div class="col-md-2">
                             <a href="#"><img class="images" src="assets/images/house.png"> </a>
                          </div>
                          <div>
                             <p class="post-text long-texts"> Project Team Consultancy Ltd. is offering your business PMP-certified project management and business analysis services in all kinds of Software projects that will ensure profitable digitalisation …
                             </p>
                          </div>
                          <p class="price">$749.00</p>
                     </div>
                      <div class="box-shape  position">
                         <a href="#"> <img  src="assets/images/Oval (6).png"> </a>
                           <span class="view date">August 19 at 4:46 PM</span>
                           <p class="box-text image-names">Flexible - Modern - Private OFFICE SPACE to Rent</p>
                           <p class="small-content textside">Canberra, Australia</p>
                           <div class="col-md-2">
                              <a href="#"><img class="images" src="assets/images/privateoffice.png"> </a>
                            </div>
                            <div>
                                <p class="post-text long-texts">  Find Serviced Office Space To Rent In Kings Cross-London. Flexible Contracts, No Agents Fee! 
                                    Please Call On 02034116715 For Arrange A Viewing 
                                </p>
                           </div>
                           <p class="price ">$749.00</p>
                       </div>
                  </div> 
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
                    <a href="#"><p class="items-number">Sydney(16 Items)</p></a>
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
    name:'Postlist'
}
</script>