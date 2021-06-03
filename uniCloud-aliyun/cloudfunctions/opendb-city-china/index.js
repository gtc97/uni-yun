'use strict';
const db = uniCloud.database()
const uniID = require('uni-id')
exports.main = async (event, context) => {
	console.log('event : ', event)
	//event为客户端上传的参数
	const collection = db.collection('uni-id-address') // 获取表'uni-id-address'的集合对象
	const collectionArea = db.collection('opendb-city-china') // 获取表'uni-id-address'的集合对象


	let params = event.params || {}
	let payload = {}
	let noCheckAction = ['list', 'getArea',]
	// console.log('event',event)
	// if (noCheckAction.indexOf(event.action) > -1) {
	// 	if (!event.uniIdToken) {
	// 		return {
	// 			code: 403,
	// 			msg: '缺少token'
	// 		}
	// 	}
	// 	payload = await uniID.checkToken(event.uniIdToken)
	// 	if (payload.code && payload.code > 0) {
	// 		return payload
	// 	}
	// 	params.uid = payload.uid
	// }

	let res = {}
	const $ = db.command.aggregate
	switch (event.action) {
		case 'list':
			res = await collection.where({
				uid: params.uid
			}).get()
			break;
		case 'getArea':
			res = await collectionArea.aggregate().match({
					"type": params.type,
					"parent_code": params.code || null
				})
				.group({
					_id: '$first_letter',
					data: $.push({
						name: '$name',
						code: '$code'
					})
				}).sort({
					_id: 1,
				})
				.end()
			break;

	}
	//返回数据给客户端
	return event
};
