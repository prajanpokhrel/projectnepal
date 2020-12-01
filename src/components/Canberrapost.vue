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
                          <ul class="nav navbar-nav navcolor">
                            <li class="active"><a href="index.html">Home<span class="sr-only">(current)</span></a></li>
                            <li><a href="Bylocation.html">By location</a></li>
                            <li><a href="#">Bussiness listing</a></li>
                            <li><a href="#">Contact</a></li>
                            <a href="#"><img  class="oval" src="assets/images/Oval.png"></a>
                            <span class="nav-text">Dileep Kr. Chaudhary</span>
                         </ul>
                      </div><!-- /.navbar-collapse -->
                  </div><!-- /.container-fluid -->
                </nav>
              </div>
          </div>
      </div> 
    </section>
    <!-- second nav -->
    <section  class="post-rectangle">
        <div class="container">
            <div class="row">
                <div class="col-md-12 canberra-post">
                    <div class="col-md-2">
                       <a href="#"><p class="item-numbers">Canbera</p></a>
                    </div>
                    <div class="col-md-2">
                        <a href="canberrapost.html"><p class="item-numbers">Canberra Post</p></a>
                    </div>
                    <div class="col-md-2">
                    <a href="mypost.html"> <p class="item-numbers">My Post</p></a>
                    </div>
                    <div class="col-md-2">
                      <a href="message.html"><p class="item-numbers">Messages</p></a>
                    </div>
                    <div class="col-md-2">
                    <a href="#"><p class="item-numbers">Favourite Post</p></a>
                    </div>
                    <div class="col-md-2">
                        <li><a href="canberrapost.html" class=" btn btn-default post-type"><span class="black">Post An Ad</span></a></li>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- postbox -->
    <section class="post-box">
        <div class="container">
            <div class="row">
                <div class="col-md-12 post-fillup">
                   <h6 class="message-box-text text-left">
                       Create Post
                   </h6>
                   <form>
                       <div class="form-group">
                           <div class="col-md-6">
                               <label class="label">Post Type</label>
                               <input type="name" class="form-control1" placeholder="Select Post Type"><br>
                          </div>
                       </div>
                       <div class="form-group">
                           <div class="col-md-6">
                               <label class="label">Expiration Date</label>
                               <input type="name" class="form-control1" placeholder="Select Expiration Date"><br>
                          </div>
                       </div>
                        <div class="form-group">
                           <div class="col-md-10">
                               <label class="label">Description</label>
                               <input type="name" class="form-control1 description-height"><br>
                          </div>
                       </div>
                       <div class="form-group">
                           <div class="col-md-2 small-box">
                               <input type="name" class="form-control1 dotted-form "><br>
                          </div>
                       </div>
                       <div class="form-group">
                           <div class="col-md-4">
                               <label class="label">Location</label>
                               <input type="name" class="form-control1" placeholder="Country"><br>
                           </div>
                       </div>  
                          <div class="form-group">
                            <div class="col-md-4 small-box">
                                <input type="name" class="form-control1" placeholder="State"><br>
                            </div>
                          </div> 
                          <div class="form-group">
                                <div class="col-md-4 small-box">
                                    <input type="name" class="form-control1" placeholder="City"><br>
                                </div>
                          </div>    
                          <div class="form-group">
                             <div class="col-md-12 ">
                                <button type="button" class="btn btn-primary">submit</button>
                             </div>
                          </div> 
                  </form> 
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
                      <a href="#"><p class="items-number">Sydney(16 Items)</p></a>
                   </div>
                   <div class="col-md-2">
                      <a href="#"><p class="items-number">Brisbane(11 Items)</p></a>
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
    name:'Canberrapost'
}
</script>