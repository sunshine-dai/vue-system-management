// 这个文件就是webpack的默认配置文件，默认名称为：webpack.config.js
// 将来只需要执行webpack就会按照配置文件的内容进行打包
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
	entry:'./src/main.js',
	output:{
		// path代表输出文件放在哪个文件夹
		path:path.resolve(__dirname, 'dist'),//将打包的文件完成的文件都放在整个文件夹中
		filename:'build.js'//此时代表放在当前文件夹中
	},
	module:{
		loaders:[
			{
				test:/\.css$/,  //正则 匹配文件
				loader:'style-loader!css-loader!autoprefixer-loader'//加载顺序先执行style-loader再执行css-loader顺序一定不能错
			},
			// {
			// 	test:/\.js$/,  //正则 匹配文件
			// 	loader:'babel-loader',//表示用babel-loader去转换所有的.js文件的es6语法转换成es5语法
			// 	// loader:'babel-loader?preset[]=es2015'  第一张方法告诉babel用哪种转码器转
			// 	exclude:/node_module/  //表示node_module里面所有的.js文件不转换
			// },
			{
		        test: /\.js$/,
		        loader: 'babel-loader',
		        exclude:/node_module/,
		        query: {
		          presets: ['es2015']
		        }
		      },
			{
				test:/\.scss$/,  //正则 匹配文件
				loader:'style-loader!css-loader!autoprefixer-loader!sass-loader'//加载顺序先执行style-loader再执行css-loader顺序一定不能错
			},
			{
				test:/\.vue$/,  //正则 匹配文件
				loader:'vue-loader'
			},
			 {
		        test: /\.(png|jpg|ttf)$/,  //匹配文件后缀名  png和jpg 和ttf文件
		        loader: 'url-loader?limit=40000'  //url就是url-loader的缩写，limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片，大于这个参数的时候就会打包到文件夹中，大小不变，哈希值，防止重名
		        // 注意limit的值不能太大不然会影响build的文件大小，影响性能
		      }
		]
	},
		// babel:{
		// 	presets:['es2015'],
		// 	plugins:['transform-runtime'] //保证在编译.vue文件的时候也能正常
		// }, //第二种方法告诉babel用es5转码器转 （推荐 但有问题）
		
		plugins:[
			new HtmlWebpackPlugin({
				title:'index',    //生成页面标题
				filename:'index.html',    //生成文件名称
				template:'index1.html'    //根据index1这个模板生成
			})
	]
	
}