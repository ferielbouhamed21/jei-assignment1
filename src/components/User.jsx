import React from "react";
import { useNavigate } from "react-router";
const User = (props) => {
  const { user } = props;
  const navigate = useNavigate();
  return (
    <div>
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25">  </div>
                                <h6 class="f-w-600">{user.name}</h6>
                                <h1>{user.username}</h1> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h2 class="m-b-20 p-b-5 b-b-default f-w-600">Informations</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h3 class="m-b-10 f-w-600">Email</h3>
                                        <h6 class="text-muted f-w-400">{user.email}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <h3 class="m-b-10 f-w-600">Phone</h3>
                                        <h6 class="text-muted f-w-400">{user.phone}</h6>
                                    </div>
                                    </div>
                                <h2 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Address</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h3 class="m-b-10 f-w-600">Street</h3>
                                        <h6 class="text-muted f-w-400">{user.address.street}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <h3 class="m-b-10 f-w-600">City</h3>
                                        <h6 class="text-muted f-w-400">{user.address.street}</h6>
                                    </div>
                                </div>
                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="" data-toggle="tooltip" data-placement="bottom" title="" style={{color:"rgb(52, 52, 66);"}}
                                     data-abc="true" onClick={() => navigate('/users/' + user.id)}>  <div class="wrapper"> <button>Show More Informations</button>
                                     </div>  </a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
};

export default User;