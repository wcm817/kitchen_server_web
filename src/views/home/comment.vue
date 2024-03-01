<template>
  <div class="comment">
    <el-table class="table" :data="tableData" border>
      <el-table-column
        v-for="item in headerData"
        :key="item.value"
        :prop="item.value"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  components: {},
  data () {
    return {
      headerData: [
        {
          value: 'firstName',
          label: '名称'
        },
        {
          value: 'lastName',
          label: '姓'
        },
        {
          value: 'message',
          label: '留言'
        },
        {
          value: 'phoneCode',
          label: '区域码'
        },
        {
          value: 'phone',
          label: '联系号码'
        },
        {
          value: 'email',
          label: '邮箱'
        },
        {
          value: 'business',
          label: '公司'
        },
        {
          value: 'createTime',
          label: '时间'
        }
      ],
      tableData: [
        {
          firstName: 'May',
          lastName: 'Wu',
          phoneCode: '086',
          phone: '1371234567',
          email: 'wu@qq.com',
          business: '超级无敌厉害公司',
          message: '留言留言留言留言',
          createTime: '时间'
        }
      ]
    };
  },
  created () { },
  mounted () { },
  methods: {}
};
</script>

<style lang="scss" scoped>
.comment {
  .table {
    width: 100%;
    ::v-deep .el-table__header {
      .el-table__cell {
        color: #333;
        background-color: #dee1e4;
      }
    }
    ::v-deep .el-table__cell {
      text-align: center;
    }
  }
}
</style>
