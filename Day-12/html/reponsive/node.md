
# Responsive Wed Design
## Khái niệm
- THiết kế wed đáp ứng
- Dựa vào kích thước trình duyệt, thiết bị để thay đổi giao diện tương thích với các thiết 
- Ngoài responsive, có thế dùng adptive để thiết kế wed đáp ứng

## Breakpoint : Điểm thay đổi
- Điểm dừng mà tại đó giao diện sẽ thay đổi ( kích thước màn hình)
- VD: 
    with:
    * 1400
    * 1200
    * 992
    * 768
    * 576

- Lưu ý : 
    - Không có breakpoint cố định, chuẩn trong tất cả các dự án
    - Breakpoint sẽ phụ thuộc vào cấu trúc của dự án
    - Trick: Dựa vào các Breakpoint phổ biến trên các css framework rồi phát triển thêm
    #Tailwwindcss
    #Bootstrap

    ## Các trường phái Responsive 
- Desktop First
- Mobile First

## Media Queries
    - Dựa vào breakpoint để viết
    - DỰa vào cách responsive: Desktop or Mobile

## Desktop Frisrt
...



 @media screen and (max-with: 1399px){
        //Selector CSS
    }

 @media screen and (max-with: 1199px){
        //Selector CSS
    }

 @media screen and (max-with: 991px){
        //Selector CSS
    }

 @media screen and (max-with: 767px){
        //Selector CSS
    }

 @media screen and (max-with: 575px){
        //Selector CSS
    }


....

- Lưu ý: Viết đúng thứ tự media queries


## Mobile First

 @media screen and (max-with: 575px){
        //Selector CSS
    }

 @media screen and (min-with: 576px){
        //Selector CSS
    }

 @media screen and (min-with: 768px){
        //Selector CSS
    }

 @media screen and (min-with: 992px){
        //Selector CSS
    }

 @media screen and (min-with: 1200px){
        //Selector CSS
    }

 @media screen and (min-with: 1400px){
        //Selector CSS
    }

## Meta Viewport

    - <meta name="viewport" 
    content="width=device-width, initial-scale=1.0,user-scalable=yes">

    **user-scalable=yes: Cho phép zoom web 
    **user-scalable=no: không cho phép zoom