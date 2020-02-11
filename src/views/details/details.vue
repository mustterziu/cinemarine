<template>
  <div class="details">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <img src="/img/latestmovies/GoT1.jpg" />
            </div>
            <div class="col-md-6">
              <input
                class="form-control mb-1"
                id="title"
                type="text"
                placeholder="Game of Thrones"
                readonly
              />
              <input class="form-control mb-1"  type="text" placeholder="120 min" readonly />
              <input class="form-control mb-1" type="text" placeholder="Fantasy" readonly />
              <input class="form-control mb-1" type="text" placeholder="Serial" readonly />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h4>Pershkrimi</h4>
          <p
            class="text-justify"
          >Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Ditet</th>
                <th scope="col">Terminet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">E hene</th>
                <td>13:30, 17:30, 21:00</td>
              </tr>
              <tr>
                <th scope="row">E marte</th>
                <td>13:30, 17:30, 21:00</td>
              </tr>
              <tr>
                <th scope="row">E merkure</th>
                <td>13:30, 17:30, 21:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rlR4PJn8b8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailsComponent",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>
.details {
  margin-top: 120px;
}

.v-application .mb-1 {
    background-color: white;
}
</style>
