
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "code": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ]
  },
  "parent_code": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "name": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "城市"
  },
  "type": {
    "rules": [
      {
        "format": "int"
      }
    ]
  },
  "first_letter": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "pinyin": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "zip_code": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "邮编"
  }
}

const enumConverter = {}

export { validator, enumConverter }
