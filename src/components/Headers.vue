<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand>NuProbe</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item to="/kit">NGSure Kit</b-nav-item>
          <b-nav-item to="/">NGSure Services</b-nav-item>
          <b-nav-item to="/orders">Orders</b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item to="/">Profile</b-dropdown-item>
          <b-dropdown-item to="/login">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>