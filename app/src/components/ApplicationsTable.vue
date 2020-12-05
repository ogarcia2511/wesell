<template>
    <div class="row-gutters">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                Product ID
              </th>
              <th scope="col">
                Product Name
              </th>
              <th>
                Applicant Name
              </th>
              <th>
                Decision
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="app in denormedApps" :key="app.key">
              <td>{{ app.id }}</td>
              <td>{{ app.name }}</td>
              <td>{{ idToNameMap[app.uid] }}</td>
              <td>
                <b-button class="btn btn-success" @click="acceptContractor(app.id, app.uid)">
                  Accept
                </b-button>
                <b-button class="btn btn-danger" @click="rejectContractor(app.id, app.uid)">
                  Reject
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  props: ['applications', 'idToNameMap'],
  computed: {
    filledApps() {
      return this.applications.filter((a) => a.users.length > 0);
    },
    denormedApps() {
      const apps = this.filledApps;
      const denormedApps = [];

      apps.forEach((a) => {
        a.users.forEach((u, i) => {
          denormedApps.push({
            id: a.id,
            key: `${a.id}+${i}`,
            name: a.name,
            uid: u,
          });
        });
      });

      return denormedApps;
    },
  },
};
</script>

<style scoped>
.btn {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
</style>
