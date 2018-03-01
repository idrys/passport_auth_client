<template>
    <div>
        <h2>Dashboard</h2>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return { }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>
