<template>
  <div id="publish-form-page">

    <p class="topic-tips"><span class="f-right close-btn">×</span>
      您今天还可免费发帖<em>2</em>条，本月可免费发信息<em>3</em>条。</p>
    <div class="upload-box">
      <span class="ico-box"><i class="icon-camera"></i></span>
      <div class="tips-text">添加图片</div>
    </div>
    <div class="form-box">
      <div class="block-wrap">
        <mt-cell title="区域" @click.native="address = true" is-link>
          {{ addressProvince }} {{ addressCity }}
        </mt-cell>
        <mt-field label="详细地址" placeholder="至少输入6个支付" type="text"></mt-field>
      </div>
      <div class="block-wrap">
        <mt-field label="选择类别" placeholder="" type=""></mt-field>
        <mt-field label="标题" placeholder="8-28个字符" type="text"></mt-field>
        <mt-field label="描述" placeholder="至少输入10个字符" type="textarea" rows="1"></mt-field>
      </div>
      <div>
        <mt-field label="联系人" placeholder="至少2个字符" type="text"></mt-field>
        <mt-field label="手机号" placeholder="手机号码" type="tel" value="188888888"></mt-field>
        <mt-field label="QQ号" placeholder="QQ号码" type="text"></mt-field>
      </div>

      <mt-popup v-model="address" position="bottom" class="mint-popup-4" style="width: 100%">
        <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5" :show-toolbar="false"></mt-picker>
      </mt-popup>
    </div>

    <div class="publish-acts">
      <mt-button type="primary">保存</mt-button>
      <mt-button type="danger">发布</mt-button>
    </div>
  </div>
</template>

<script>
  const address = {
    '北京': ['北京'],
    '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
    '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
    '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
    '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
    '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
    '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
    '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
    '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
    '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
    '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州']
  };

  export default {
    name: 'publish-form',

    data () {
      return {
        address: false,
        addressSlots: [
          {
            flex: 1,
            values: window.Object.keys(address),
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['北京'],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        addressProvince: '四川',
        addressCity: '成都'
      };
    },
    methods: {
      onAddressChange (picker, values) {
        picker.setSlotValues(1, address[values[0]]);
        this.addressProvince = values[0];
        this.addressCity = values[1];
      }
    },
    components: {

    },
    created: function () {
      // 使用设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
//        headerLeftText: '关闭',
//        headerRightIcon: 'icon-share2',
        headerRightText: '我的发布',
        headerTitle: '发布信息'
      })

      // 请求数据
//      this.$http.get('/static/data/log.json',
//        {isLog: true}).then(data => {
//        const datas = data.body;
//
//        this.logItems = datas.logItems;
//      }, data => {
//        alert('获取数据失败！');
//      });
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";
  #publish-form-page {
    padding-bottom: 60px;
    .topic-tips {
      padding: 0 10px;
      color: darken($grayBorder, 3%);
      .close-btn {
        font-size: 20px;
        margin-top: -3px;
        font-family: $smallFont;
      }
    }
    .upload-box {
      padding: 30px;
      text-align: center;
      background-color: #e3f3ff;
      i {margin-right: 0; }
      .ico-box {
        display: inline-block;
        font-size: 32px;
        height: 2.1em;
        line-height: 2.1em;
        width: 2.1em;
        margin-bottom: 6px;
        border-radius: 50%;
        background-color: #79bef5;
        color: #ffffff;
      }
      .tips-text { color: #79bef5; }
    }

    .publish-acts {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      .mint-button {
        float: left;
        width: 50%;
        border-radius: 0;
      }
      @include clearfix();
    }
  }

</style>