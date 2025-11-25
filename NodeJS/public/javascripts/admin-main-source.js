// 获取所有一级菜单元素（.menu）
const menus = document.querySelectorAll('.menu');
//const content_areas = main_content.querySelectorAll('.content-area');


// 遍历每个一级菜单，添加点击事件
menus.forEach(menu => {
    menu.addEventListener('click', function () {
        // 切换当前一级菜单的 active 类（核心：控制子菜单显示/隐藏）
        //menus.forEach(item =>{if (item !== this) {item.classList.remove('active')}});
        this.classList.toggle('active');
    });
});

const main_content = document.querySelector('.main-content');//获取主内容区域

//退出登录效果
const logoutBtns = document.querySelectorAll('.logout-button');
logoutBtns.forEach(logoutBtn => {
    logoutBtn.addEventListener('click', function () {
        location.replace('/admin');
    });
});

const menu_items = document.querySelectorAll('.menu-item');
const content_areas = main_content.querySelectorAll('.content-area');
const default_content_area = main_content.querySelector('#default-content-area');
//初始情况下所有content_area都不显示,只显示default_content_area
content_areas.forEach(area => {
    area.style.display = 'none';
});
default_content_area.style.display = 'block';


menu_items.forEach(menu_item => {
    menu_item.addEventListener('click', function () {
        // 遍历所有菜单项，并移除 active 类
        menu_items.forEach(item => { 
            if (item !== this) { item.classList.remove('active') } 
        });
        // 添加当前菜单项的 active 类
        this.classList.toggle('active');
        // 获取当前激活项的目标内容ID
        const targetId = this.querySelector('a').getAttribute('data-target');

        // 隐藏所有内容区域
        content_areas.forEach(area => {
            area.style.display = 'none';
        });

        // 显示目标内容
        const targetContent = main_content.querySelector(`#${targetId}`);
        if (targetContent) {
            if(menu_item.classList.contains('active')){
                targetContent.style.display = 'block';
                default_content_area.style.display = 'none';
            }
            else{
                default_content_area.style.display = 'block';
            }
        }
    });
});
//用户信息查询数据刷新按钮
const user_message_refresh_button = document.getElementById('user-message-refresh-button');
const user_message_table = document.getElementById('user-message-table');
user_message_refresh_button.addEventListener('click', async () => {
    try {
        // 调用后端 API
        const response = await fetch('/admin/admin-main/refresh');
        const data = await response.json();
        // 渲染结果
        //  清空列表的数据
        //保留初始标签行
        while (user_message_table.rows.length > 1) {
            user_message_table.deleteRow(user_message_table.rows.length - 1);
        }

        console.log(data);

        data.forEach(item=>{
            //创建当前行
            const row = document.createElement('tr');
            //行内容单元创建
            //UserID单元
            const id = document.createElement('td');
            id.textContent = item.UserID;
            //UserName单元
            const name = document.createElement('td');
            name.textContent = item.UserName;
            //UserPwd单元
            const pwd = document.createElement('td');
            pwd.textContent = item.UserPwd;
            //UserPhoneNumber单元
            const phoneNum = document.createElement('td');
            phoneNum.textContent = item.UserPhoneNumber;
            //UserEmail        
            const email = document.createElement('td');
            email.textContent = item.UserEmail;
            //单元填充
            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(pwd);
            row.appendChild(phoneNum);
            row.appendChild(email);
            // 将行添加到表格
            user_message_table.appendChild(row);
        });
        
    } catch (error) {
        console.error('获取数据失败:', error);
        alert(error);
    }
});
