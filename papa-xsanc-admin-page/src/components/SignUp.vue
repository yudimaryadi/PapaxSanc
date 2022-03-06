<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="card card-user">
          <div class="card-header ml-auto mr-auto">
            <h2 class="card-title">Register Admin</h2>
            <p>Create account</p>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleRegister">
              <div class="row">
                <div class="col-md-6 ml-auto mr-auto">
                  <div class="form-group">
                    <h6 class="card-title">Email</h6>
                    <input type="email" class="form-control" placeholder="Email Address" v-model="user.email">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 ml-auto mr-auto">
                  <div class="form-group">
                    <h6 class="card-title">Password</h6>
                    <input type="password" class="form-control" placeholder="Your Password" v-model="user.password">
                  </div>
                </div>
              </div>
              <div class="col-md-6 ml-auto mr-auto">
                <div class="form-group">
                  <h6 class="card-title">Phone Number</h6>
                  <input type="phoneNumber" class="form-control" placeholder="Enter Your Phone" v-model="user.phoneNumber">
                </div>
              </div>
              <div class="col-md-6 ml-auto mr-auto">
                <div class="form-group">
                  <h6 class="card-title">Address</h6>
                  <input type="address" class="form-control" placeholder="Enter Your Address" v-model="user.address">
                </div>
              </div>
              <div class="row">
                <div class="update ml-auto mr-auto">
                  <button type="submit" class="btn btn-primary btn-round">Sign Up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data(){
    return {
      user: {
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      }
    }
  },
  methods: {
    handleRegister(){

    }
  }
}
</script>

<style>

</style>