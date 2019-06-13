let curPageNum = 1;
let searchVal = '';

function getStudentList(){
    $.get('http://localhost:8080/api/student',{
        pageNum:curPageNum,
        pageSize:5,
        studentName:searchVal
    },function(res){
        console.log(res);
        if(res.code !== 0){
            alert(res.meg);
            return;
        }
        let studentList = res.data.list;
        let totalPage = res.data.totalPage;

        let html ='';
        for(var i = 0;i<studentList.length;i++){
            let item = studentList[i];
            html +=`
                <tr data-id="${item._id}">
                    <td>${i+1}</td>
                    <td>${item.studentName}</td>
                    <td>${item.age}</td>
                    <td>${item.grade}</td>
                    <td>
                        <button class="btn btn-danger">删除</button>
                    </td>
                </tr>
            `
        }
        $('#tbody').html(html);
        let page = '';
        page +=`
            <li data-page="${curPageNum-1<1?1:curPageNum-1}" class="lv-pagination__item prev"><a href="#"><i class="iconfont icon-doubleleft"></i></a></li>
        `
        for(var i= 1;i<=totalPage;i++){
            page +=`
                <li data-page="${i}" class="lv-pagination__item ${(i === curPageNum)?'active':''}"><a href="#">${i}</a></li>
            `
        }
        page += `
            <li data-page="${curPageNum + 1 > totalPage ? totalPage : curPageNum + 1}" class="lv-pagination__item next"><a href="#"><i class="iconfont icon-doubleright"></i></a></li>
        `
        $('.lv-pagination ul').html(page);
    })
}
$(function(){
    getStudentList();
    $('.lv-pagination').on('click','.lv-pagination__item',function(){
        let page = $(this).data('page');

        if(curPageNum !== page){
            curPageNum = page;
            getStudentList();
        }
    })

    $('#tbody').on("click",'.btn-danger',function(){
        let id = $(this).parents('tr').data('id');
        console.log(id);
        $.ajax({
            url:`http://localhost:8080/api/student/${id}`,
            method:'DELETE',
            success:function(res){
                if(res.code === 0){
                    getStudentList();
                }else{
                    alert(res.meg)
                }
            }
        })
    })

    $('#searchBtn').click(function(){
        curPageNum = 1;
        searchVal = $('#searchVal').val();
        getStudentList();
    })
})