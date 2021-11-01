/* eslint-disable no-console */
export default async function ({app, $auth, route}) {
  // if (!app.$auth.loggedIn) {
  //     return
  // }
  const auth = $auth;
  const authStrategy = auth.strategy.name;
  if(authStrategy === 'facebook' || authStrategy === 'google'){
    console.log({route})
    // console.log({token: auth.getToken(authStrategy)})
    // const token = auth.getToken(authStrategy).substr(7)
    // const token = route.query.code
    const hashCode = route.hash.substring(1).split('&')
    let token = null
    for (let i = 0; i < hashCode.length; i++) {
      const element = hashCode[i];
      const splitted = element.split('=')
      if (splitted[0] === 'id_token') {
        token = splitted[1]
      }
    }
    const authStrategyConverted = authStrategy === 'facebook' ? 'facebook' : 'google';
    const url = `/auth/social`;
    const body = {
      access_token: token,
      redirect_url: 'http://localhost:3000/',
      provider: authStrategyConverted,
      request_type: 'code'
    }
    
    try {
      const response = await app.$axios.$post(url, body);
      console.log('auth social resp:', {response})
      // auth.setToken('local', "Bearer "+ data.access_token);
      // setTimeout( async () => {
      //   auth.setStrategy('local');
      //   setTimeout( async () => {
      //       await auth.fetchUser();
      //   })
      // });
    } catch (error) {
      console.log(error);
    }
  }
}