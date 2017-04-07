import Vue from 'vue';
import Router from 'vue-router';

import header from '@/widget/header'
import index from '@/pages/index';
import headline from '@/pages/headline';
import list from '@/pages/list';
import detail from '@/pages/detail';
import userPerfect from '@/pages/user-perfect';
import register from '@/pages/register';
import login from '@/pages/login';
import password from '@/pages/password';
import address from '@/pages/address';
import search from '@/pages/search';
import cate from '@/pages/cate';
import cateSubscibe from '@/pages/cate-subscibe';
import publishForm from '@/pages/publish-form';
import user from '@/pages/user';
import userEdit from '@/pages/user-edit';
import message from '@/pages/message';
import myPublish from '@/pages/my-publish';
import myCollect from '@/pages/my-collect';
import myHistory from '@/pages/my-history';
import mySubscribe from '@/pages/my-subscribe';
import certification from '@/pages/certification';
import certificationCompany from '@/pages/certification-company';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/headline',
      name: 'headline',
      components: {
        header: header,
        default: headline
      }
    },
    {
      path: '/detail',
      name: 'detail',
      components: {
        // header: header,
        default: detail
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        header: header,
        default: register
      }
    },
    {
      path: '/user-perfect',
      name: 'userPerfect',
      components: {
        header: header,
        default: userPerfect
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/password',
      name: 'password',
      components: {
        header: header,
        default: password
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/cate',
      name: 'cate',
      components: {
        // header: header,
        default: cate
      }
    },
    {
      path: '/cate-subscibe',
      name: 'cateSubscibe',
      components: {
        // header: header,
        default: cateSubscibe
      }
    },
    {
      path: '/publish-form',
      name: 'publishForm',
      components: {
        header: header,
        default: publishForm
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/user-edit',
      name: 'userEdit',
      components: {
        header: header,
        default: userEdit
      }
    },
    {
      path: '/message',
      name: 'message',
      components: {
        header: header,
        default: message
      }
    },
    {
      path: '/my-publish',
      name: 'myPublish',
      components: {
        header: header,
        default: myPublish
      }
    },
    {
      path: '/my-collect',
      name: 'mycollect',
      components: {
        header: header,
        default: myCollect
      }
    },
    {
      path: '/my-history',
      name: 'myHistory',
      components: {
        header: header,
        default: myHistory
      }
    },
    {
      path: '/my-subscribe',
      name: 'mySubscribe',
      components: {
        header: header,
        default: mySubscribe
      }
    },
    {
      path: '/certification',
      name: 'certification',
      components: {
        header: header,
        default: certification
      }
    },
    {
      path: '/certification-company',
      name: 'certificationCompany',
      components: {
        header: header,
        default: certificationCompany
      }
    }
  ]
});
