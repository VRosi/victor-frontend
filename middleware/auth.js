import Cookie from 'js-cookie'

export default function ({
  store
}) {
  const cookie = Cookie.get('auth');
  // console.log('cookie',cookie);
  const user = cookie ? JSON.parse(cookie) : null;
  store.commit('SET_USER', user)
}
