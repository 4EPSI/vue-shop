export default {
  state: {
    shopList: [
      { 
        id: 1, 
        title: 'Nike Red',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam, quas a cupiditate et in odit error neque natus? Magni necessitatibus, facilis porro distinctio animi quia dolor ea itaque harum.',
        img: require('../assets/shop-img/1.png')
      },
      { 
        id: 2, 
        title: 'Nike Default',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam, quas a cupiditate et in odit error neque natus? Magni necessitatibus, facilis porro distinctio animi quia dolor ea itaque harum.',
        img: require('../assets/shop-img/4.png')
      },
      { 
        id: 3, 
        title: 'Nike Green',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam, quas a cupiditate et in odit error neque natus? Magni necessitatibus, facilis porro distinctio animi quia dolor ea itaque harum.',
        img: require('../assets/shop-img/7.png')
      },
      { 
        id: 4, 
        title: 'Nike Red',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam, quas a cupiditate et in odit error neque natus? Magni necessitatibus, facilis porro distinctio animi quia dolor ea itaque harum.',
        img: require('../assets/shop-img/10.png')
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList
    },
    getProduct: (state) => (id) => {
      return state.shopList.find(product => product.id == id)
    }
  }
}