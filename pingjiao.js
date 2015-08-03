
// 教务处学生评教系统，自动评教代码
// Author Michael Liu (HIT)

// Liscence MIT


// 使用方法

// 使用chrome或者firefox打开评教系统，进入1234四个子评教页面之中。
// 页面右键->审查元素 或 F12 ，打开console，命令行下粘贴入全局量。再粘贴入相应页代码，回车执行。
// 注意每打开新的页面需要再执行以上两次复制。
// 代码执行之后所有选项和填写已完成，请核对后确认。

// 全局量 所有页面都要用到
var nextrate = 0.7;
var childifream = $(window.frames["iframename"].document);
function check (list) {
	for (var i = 0; i < list.length; i++) {
		childifream.find("option[value="+list[i]+"]").each(function(){
			if (Math.random()<nextrate) $(this).attr('selected',1);
			else $(this).next().attr('selected',1);
		})
	};
};
function input (indf,choose) {
	childifream.find("input"+indf+",textarea"+indf).each(function() {
		$(this).val(choose[parseInt(Math.random()*choose.length)]);
	})
};
// 学生评教，第一页
check ([28,35,47,51]);
input(".inp6",[0]);

// 第二页
check ([2,6]);
input("[name=yxzc]",['上课认真','批改作业认真','相关专业知识丰富']);
input("[name=bzzc]",['课下与学生交流少','上课趣味性低']);

// 第三页
// 此项判断复杂，但是填写简单，请手动选择。
// 此项较为重要，请同学们按照自己想法认真填写。233

// 第四页
check ([1,6]);
input("[name=yxzc]",['实验安排紧凑有趣','难易适中','实验内容丰富']);
input("[name=bzzc]",['实验环境有待提高','还需增加教师指导']);