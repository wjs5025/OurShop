use ourshop;
insert into product(name, description, price, discount_rate, storage_method, photo_url)
values ("[온더고] 더블치즈 차돌깍두기 300g","치즈 듬뿍,모짜렐라, 통차돌, 국내산 깍두기",5980,5,"냉동","https://mall.ourhome.co.kr//attach_file/20230801/DFDECC1568BA46F9A96D27A52921B06C.jpg"),
("[온더고] 전주식 소고기 오색비빔밥 310g","오색 가득 토핑 듬뿍, 소고기, 한국의 맛",5980,5,"냉동","https://mall.ourhome.co.kr//attach_file/20230801/93CE10E54C6E49D1AD21BE99B8956BCC.jpg"),
("[온더고] 숯불향 우삼겹불고기덮밥 290g","저온 숙성 불고기, 오븐 구이 야채, 한국의 맛",5980,5,"냉동","https://mall.ourhome.co.kr//attach_file/20230801/7A240C661DBD44C998FB54737C867240.jpg"),
("진한 사골곰탕 300g","100% 사골로 고은 진한 사골곰탕",1750,5,"실온","https://mall.ourhome.co.kr//attach_file/20201118/C4A1610E7468407FA935CBF8DE2164DF.jpg"),
("[온더고] 이탈리아식 페퍼라구 볼로네제 파스타 300g","매콤달콤, 고기 듬뿍, 라구 소스, 펜네파스타",5980,5,"냉동","https://mall.ourhome.co.kr//attach_file/20230801/FDC19A9261874DE58B6B50F9EEFA007E.jpg"),
("[온더고] 육즙 가득 미니함박 & 로제파스타 310g","육즙 가득 함박, 토마토 로제, 파스타",5980,5,"냉동","https://mall.ourhome.co.kr//attach_file/20230801/978E874BDB3F4C34B7970982DF974EA0.jpg"),
("[온더고] 통모짜 로제 떡볶이 with 파스타 320g","치즈 듬뿍, 떡볶이, 로제 소스, 생크림, 퓨전한식",5980,5,"냉동","https://mall.ourhome.co.kr//attach_file/20230809/B22F8C84573E46B0B215CB68E7BA106F.jpg"),
("[온더고] 중화식 첨면장 불향 덮밥 290g","첨면장, 짜장, 계란 후라이, 고추 잡채, 중화식",6480,50,"냉동","https://mall.ourhome.co.kr//attach_file/20231101/5757B7683B3C42FB9F4280ACBD7E1485.jpg"),
("[구씨반가] 전복 소갈비탕 600g", "진주명문가 구씨가문의 전통을 담은 전복 소갈비탕", 11980, 20, "실온", "https://mall.ourhome.co.kr//attach_file/20231226/B4CCDFBCFB884CB0A96E45AEA6EBAD40.jpg"),
("아워홈 치킨스테이크 마살라 레드커리 450g","겉바속촉 마살라 레드커리 치킨스테이크",10980,5,"냉동","https://mall.ourhome.co.kr//attach_file/20230920/B92F1454250B4F12AC06BB3486B8FA85.jpg"),
("[MD추천] 구씨반가 속풀이 해장국 3개입", "진주명문가 구씨가문의 전통을 담은 속풀이 해장국", 23940, 20, "실온", "https://mall.ourhome.co.kr//attach_file/20230830/B99B2CE1AF19416BA98E652E7138AD57.jpg"),
("[MD추천] 온더고 BEST 7종 세트", "MD가 고른 인기 절정 온더고를 한 번에!", 42360, 30, "냉동", "https://mall.ourhome.co.kr//attach_file/20231227/3605A23BEB8541A09886891C374BAE82.jpg"),
("아워홈 싱카이 탕수육 450g", "차이니즈 파인다이닝 싱카이 명장의 노하우를 담은 탕수육", 14000, 20, "냉동", "https://mall.ourhome.co.kr//attach_file/20231222/36E63E2A4DB34E23BF8EF9E9C444E696.jpg"),
("[MD추천] 소포장 김치 3종 세트","맛김치, 열무김치, 총각김치 구성",19680,30,"냉장","https://mall.ourhome.co.kr//attach_file/20231110/CAD80968F9A7421BB739DCFE3084839D.png"),
("아워홈 싱카이 삼선볶음밥 420g (2인식)","차이니즈 파인다이닝 싱카이 명장의 노하우를 담은",6980,5,"냉동","https://mall.ourhome.co.kr//attach_file/20231201/70063B402F4349398BE6C78FAD2E44F3.jpg"),
("담백한 소고기 미역국 300g","완도산 미역과 수비드 소고기로 만든",2620,5,"실온","https://mall.ourhome.co.kr//attach_file/20231117/E889FD2862A44D999650DCDC5B164475.jpg"),
("[온더고] 불맛 가득 김치제육덮밥 290g","볶음 김치, 제육 볶음, 계란 볶음밥",5980,0,"냉동","https://mall.ourhome.co.kr//attach_file/20230801/29D9F790D05846B38062DB3D747BC299.jpg"),
("아워홈 갈치김치 800g (트레이)","국내산 갈치로 시원하고 깊은 맛이 일품",19000,0,"냉장","https://mall.ourhome.co.kr//attach_file/20231101/9DD8506AD6B648D1935517EA678BB65F.jpg");

desc cart;
select * from cart;
select * from product;
Select * from cart_product;

drop database ourshop;