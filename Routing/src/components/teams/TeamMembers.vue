<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Next Team Users</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  props: ['id'],
  components: {
    UserItem
  },
  inject: ['teams', 'users'],
  data() {
    return {
      teamId: '',
      teamName: '',
      members: [],
    };
  },
  methods: {
    updateMembers() {
      const team = this.teams.find(team => team.id=== this.teamId);
      this.teamName = team.name;
      this.members=this.users.filter(user => team.members.includes(user.id))
      window.alert(this.$route.query['sort'])

    }
  },
  watch: {
    id: function(newId){
      this.teamId = newId;
      this.updateMembers();
    }
  },
  created() {
    debugger;
    // const teamId = this.$route.params.id
    this.teamId = this.id;
    this.updateMembers();
    // const team = this.teams.find(team => team.id=== this.teamId);
    // this.teamName = team.name;
    // this.members=this.users.filter(user => team.members.includes(user.id))
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>