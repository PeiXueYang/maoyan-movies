
/**
* 自定义插件
*@psdt  2017-5-25
*/
const MyPlugin = {

	install(Vue , options){
		/**
		 *
		 *
		*在终端输出
		*/
		Vue.prototype.$log = function( ...msg ){
			try{
			if( Vue.config.CONSOLE_CHECK )

			console.log(...msg);

			}
			catch(err){
				console.log( err );
			}
		}
	}
}

export default MyPlugin