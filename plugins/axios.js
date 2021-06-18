export default function ({ $axios, redirect, store, $toast }) {
  $axios.onRequest(config => {
    // console.log('config request', config);
    // console.log('Making request to ' + config.url);
    store.dispatch('startLoading');

  })
  $axios.onResponse(response => {
    // console.log('response-->', response, $toast);
    store.dispatch('finishLoading');
  })

  $axios.onError(error => {
    store.dispatch('finishLoading');
    // console.log('this errorasdasd', error);
    if (error.response.status === 500) {
      redirect('/sorry')
    }
    // console.log('rp', error.response);
    if (error.response.status == 422) {
      let ev = error.response.data.data;
      for (const key in ev) {
        $toast.error(ev[key][0]);
      }
    }
    else {
      $toast.error(error.response.data.message);
    }
  })
}
