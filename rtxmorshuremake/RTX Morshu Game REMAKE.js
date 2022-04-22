var storyContent = ﻿{"inkVersion":19,"root":[["\n","\n","\n","\n","\n","\n","\n",{"->":"menu"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"menu":[["^Morshu game menu","\n","ev","str","^Play","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^See the amount of all possible endings","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Credits","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"->":"game_start"},{"#f":5}],"c-1":["\n","^You can get 9 different endings in this version!","\n","^1. Neutral ending / Buy something","\n","^2. Bad ending / Fail to buy anything","\n","^3. Good ending / Buy everything","\n","^5. Betrayal ending / Open your own shop and steal clients from Morshu","\n","^6. Credit ending / Ask for credit too many times","\n","^7. Robbery ending / Rob Morshu","\n","^8. Weed ending / Offer Morshu something REALLY good to get Credit","\n","^9. Secret ending / ????","\n",["ev","str","^Back to menu","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"menu"},{"#f":5}]}],{"#f":5}],"c-2":["\n","^Original Creator - koshkamatew","\n","^Remake made by - YupYupTRP","\n",{"->":"menu"},{"#f":5}]}],{"#f":1}],"game_start":["^...","\n","^GAME START","\n","^...","\n","^Ah, standing on the road gives you a lot of hope about this game","\n","^What will you do?","\n",{"->":"starting_road_options"},{"#f":1}],"starting_road_options":[["ev","str","^See my rubies balance","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Look for rubies","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Go to the town","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Go to Morshu","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n","^You have ","ev",{"VAR?":"rubies"},"out","/ev","^ rubies!","\n",{"->":"starting_road"},{"#f":5}],"c-1":["\n","^Well, makes sense. The first thing you do is check the bushes for any random rubies.","\n","^Lucky or not, you found 5 rubies!","\n","ev",{"VAR?":"rubies"},5,"+","/ev",{"VAR=":"rubies","re":true},"^You now have ","ev",{"VAR?":"rubies"},"out","/ev","^ rubies!","\n",{"->":"starting_road"},{"#f":5}],"c-2":["\n","^You go to the town","\n",{"->":"town"},{"#f":5}],"c-3":["\n","^...","\n","^Remember, Morshu's shop is the point of no return when you buy something. The game will end and you will get your ending.","\n","^...","\n",{"->":"morshu_shop"},{"#f":5}]}],{"#f":1}],"starting_road":["^Ah, you are on the starting road. Nothing unusual!","\n","^What will you do?","\n",{"->":"starting_road_options"},{"#f":1}],"town":[["^What will you do in the town?","\n","ev","str","^Check the trashcan","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go to the dark street","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Get a job","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Go to the small shop","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^Return to the road","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["\n","^There is a homeless man lying in there.","\n","^Take 2 rubies from him?","\n",["ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You evil man. You got 2 rubies","\n","ev",{"VAR?":"rubies"},2,"+","/ev",{"VAR=":"rubies","re":true},"^You have ","ev",{"VAR?":"rubies"},"out","/ev","^ rubies now!","\n",{"->":"town"},{"#f":5}],"c-1":["\n","^I knew you had a good soul!","\n",{"->":"town"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^You turn go behind the corner, straight onto the dark street.","\n",{"->":"dark_street"},{"#f":5}],"c-2":["\n","^You go to the job agency","\n",{"->":"job_agency"},{"#f":5}],"c-3":["\n","^You go to the small shop on the street","\n",{"->":"small_shop"},{"#f":5}],"c-4":["\n","^I'm out of here.","\n",{"->":"starting_road"},{"#f":5}]}],{"#f":1}],"small_shop":["^The cashier is sleeping","\n",{"->":"small_shop_options"},{"#f":1}],"small_shop_options":[["ev","str","^Wake him up","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Steal","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Leave","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",["ev","visit",6,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"ev","du",6,"==","/ev",{"->":".^.s6","c":true},"nop",{"s0":["pop",{"->":".^.^.47"},null],"s1":["pop","^You: Wake up",{"->":".^.^.47"},null],"s2":["pop","^You: Wake up...",{"->":".^.^.47"},null],"s3":["pop","^You: WAKE UP",{"->":".^.^.47"},null],"s4":["pop","^You: WAAAAAAAAAKEEEEEEE UUUUUUUUUUP",{"->":".^.^.47"},null],"s5":["pop","^You: It's no use...",{"->":".^.^.47"},null],"s6":["pop",{"->":".^.^.47"},null],"#f":5}],"\n",{"->":"small_shop"},{"#f":5}],"c-1":["\n",{"->":"gun"},{"#f":5}],"c-2":["\n","^Let's allow the cashier to take a nap..?","\n",{"->":"town"},{"#f":5}]}],{"#f":1}],"gun":["^The only thing here is a gun.","\n","^You take the gun and go out of the shop...","\n","^With the gun, you also realised there were 40 rubies.","\n","ev",{"VAR?":"rubies"},40,"+","/ev",{"VAR=":"rubies","re":true},"^You take them aswell","\n",{"->":"town"},{"#f":1}],"dark_street":[["^Its dark in here.","\n","ev",{"CNT?":"talk_to_man"},"/ev",[{"->":".^.b","c":true},{"b":["^ The man isn't there no more.",{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["^You see some man standing there.",{"->":".^.^.^.7"},null]}],"nop","\n","ev","str","^Go back","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Randomly push the wall with no sole reason","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Talk to the man","/str",{"CNT?":"talk_to_man"},"!","/ev",{"*":".^.c-2","flg":5},{"c-0":["\n","ev",{"CNT?":"talk_to_man"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^You leave the creepy street","\n",{"->":"town"},{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n","^Before you could go back, the man approached you. He asked if you wanted some weed for 2 rubies... ",{"->":"talk_to_man"},"\n",{"->":".^.^.^.6"},null]}],"nop","\n",{"#f":5}],"c-1":["\n","ev",{"CNT?":"talk_to_man"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^You pushed the wall and went through a secret door. Hmm...","\n","^This is a shop. Do you want to open it?","\n",{"->":"new_shop"},{"->":"town"},{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n","^Before you could push the wall, the man approached you. He asked if you wanted some weed for 2 rubies... ",{"->":"talk_to_man"},"\n",{"->":".^.^.^.6"},null]}],"nop","\n",{"#f":5}],"c-2":["\n","^Man: Hey! Want some weed? It costs only 2 rubies!","\n",{"->":"talk_to_man"},{"#f":5}]}],{"#f":1}],"talk_to_man":[["ev","str","^Buy weed","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Reject","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",{"VAR?":"rubies"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^Man: nice, here you go!","\n","^Man gave you the weed.","\n","^Smells like rotten fish... Why though?","\n","^You wanted to call the man, but he already disapeared into the darkness","\n",{"->":"weed"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n","^Man: sorry to say, but you don't have 2 rubies","\n","^Then he turned around and walked away","\n",{"->":"dark_street"},{"->":".^.^.^.8"},null]}],"nop","\n",{"#f":5}],"c-1":["\n","done",{"#f":5}]}],{"#f":1}],"weed":["ev",{"VAR?":"rubies"},2,"-","/ev",{"VAR=":"rubies","re":true},{"->":"dark_street"},{"#f":1}],"job_agency":[["^Who will you work as?","\n",["ev",{"^->":"job_agency.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^GrubHub delivery guy",{"->":"$r","var":true},null]}],["ev",{"^->":"job_agency.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Newspapers guy",{"->":"$r","var":true},null]}],["ev",{"^->":"job_agency.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Plumber",{"->":"$r","var":true},null]}],"ev","str","^Go back","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["ev",{"^->":"job_agency.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^That's too cringe for you.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"job_agency.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^Booooooring","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"job_agency.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^I mean, do you have any other choices?","\n","^You work as a plumber and earn 5 rubies","\n","^You got 5 rubies!","\n","ev",{"VAR?":"rubies"},5,"+","/ev",{"VAR=":"rubies","re":true},{"->":".^.^.^"},{"#f":5}],"c-3":["\n","^Exactly. Nothing left for you here!","\n",{"->":"town"},{"#f":5}]}],{"#f":1}],"new_shop":[["ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^You opened the shop and began to sell lamp oil, ropes and bombs","\n","^Since the shop is located in a way better place where Morshu has his shop,","\n","^all of his clients slowly turned to you.","\n","^It all went smooth, until Morshu himself came","\n","^Morshu: do you know what i do with those who steal my clients?","\n","^Morshu takes out a gun","\n","^Morshu: i get rid of them.","\n","^You got: betrayal ending / open your own shop and steal clients from Morshu","\n","^Thanks for playing! See you soon ;) ","end","\n",{"#f":5}],"c-1":["\n","^Alright.","\n","^You went back","\n",{"->":"dark_street"},{"#f":5}]}],{"#f":1}],"morshu_shop":[[["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop",{"->":".^.^.29"},null],"s1":["pop","^Morshu: Lamp oil, rope, bombs! You want it? It's yours, my friend. As long as you have enough rubies!",{"->":".^.^.29"},null],"s2":["pop","^Morshu: Oh, its you again! Welcome back, what will you do now?",{"->":".^.^.29"},null],"s3":["pop",{"->":".^.^.29"},null],"#f":5}],"\n","ev","str","^Buy","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Act","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Leave","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"->":"morshu_buy"},{"#f":5}],"c-1":["\n","^Act? Well...","\n",{"->":"act_morshu"},{"#f":5}],"c-2":["\n","^Morshu: goodbye, see you again soon!","\n",{"->":"starting_road"},{"#f":5}]}],{"#f":1}],"act_morshu":[["^What will you do?","\n","ev","str","^Tell a secret...","/str",{"CNT?":"talk_to_man"},{"CNT?":"new_shop"},"&&",{"CNT?":"town"},"&&",{"CNT?":"job_agency"},"&&",{"CNT?":"small_shop"},"&&",{"CNT?":"dark_street"},"&&",{"CNT?":"starting_road"},"&&",{"VAR?":"rubies"},50,">=","&&","/ev",{"*":".^.c-0","flg":21},"ev","str","^Rob Morshu","/str",{"CNT?":"gun"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^Offer weed","/str",{"CNT?":"weed"},"/ev",{"*":".^.c-2","flg":21},"ev","str","^Talk","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^Ask for credit","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^Nothing, go back","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["\n",{"->":"morshu_tell_a_secret"},{"#f":5}],"c-1":["\n",{"->":"rob_morshu"},{"#f":5}],"c-2":["\n",{"->":"morshu_weed"},{"#f":5}],"c-3":["\n",{"->":"morshu_talk"},{"#f":5}],"c-4":["\n",{"->":"morshu_ask_credit"},{"#f":5}],"c-5":["\n","^O-okay.","\n",{"->":"morshu_shop"},{"#f":5}]}],{"#f":1}],"morshu_ask_credit":[["ev","visit",4,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop",{"->":".^.^.35"},null],"s1":["pop","^Morshu: Sorry Link, I can't give credit!",{"->":".^.^.35"},null],"s2":["pop","^Morshu: I CAN'T GIVE CREDIT! CAN'T. GIVE. CREDIT!!!!",{"->":".^.^.35"},null],"s3":["pop",{"->":"morshu_ask_credit_ending"},{"->":".^.^.35"},null],"s4":["pop",{"->":".^.^.35"},null],"#f":5}],"\n",{"->":"morshu_shop"},{"#f":1}],"morshu_ask_credit_ending":["^Morshu: That's it *takes out gun*. You want credit? How about a BULLET? *gunshot* .....","\n","^You died.","\n","^You got: credit ending / ask for credit too many times","\n","^Thanks for playing! See you... or not? I mean, you are dead, right? ","end","\n",{"#f":1}],"morshu_buy":[["^Morshu: What will you buy, Link?","\n","^What will you buy?","\n","ev","str","^Lamp oil / Cost 5","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Rope / Cost 10","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Bombs / Cost 20","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Everything / Cost 35","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Back","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["\n","ev",{"VAR?":"rubies"},5,">=","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"bought_something_from_morshu"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"not_enough_rubies_for_morshu"},{"->":".^.^.^.8"},null]}],"nop","\n",{"#f":5}],"c-1":["\n","ev",{"VAR?":"rubies"},10,">=","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"bought_something_from_morshu"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"not_enough_rubies_for_morshu"},{"->":".^.^.^.8"},null]}],"nop","\n",{"#f":5}],"c-2":["\n","ev",{"VAR?":"rubies"},20,">=","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"bought_something_from_morshu"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"not_enough_rubies_for_morshu"},{"->":".^.^.^.8"},null]}],"nop","\n",{"#f":5}],"c-3":["\n","ev",{"VAR?":"rubies"},35,">=","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"bought_everything_from_morshu"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"not_enough_rubies_for_morshu"},{"->":".^.^.^.8"},null]}],"nop","\n","done",{"#f":5}],"c-4":["\n",{"->":"morshu_shop"},{"#f":5}]}],{"#f":1}],"not_enough_rubies_for_morshu":["^Morshu: Sorry Link, I can't give credit! Come back when you're a little, MMMM, richer!","\n","^Morshu kicked you out of the shop","\n","^...","\n","^GAME END","\n","^...","\n","^You got: bad ending / fail to buy anything","\n","^Thanks for playing! See you soon ;) ","end","\n",{"#f":1}],"bought_something_from_morshu":["^Morshu: thanks for, MMMM, purchase!","\n","^You got: neutral ending / buy something","\n","^Thanks for playing! See you soon ;) ","end","\n",{"#f":1}],"bought_everything_from_morshu":["^Morshu: thanks for, MMMM, buying everything!","\n","^You got: good ending / buy everything","\n","^Thanks for playing! See you soon ;) ","end","\n",{"#f":1}],"morshu_weed":["^Morshu: you have WEED? YES YES YES, I CAN, I CAN GIVE CREDIT!","\n","^Morshu: as long as you give me the weed.","\n","^Wow, did you really manage to get credit?","\n","^You got: good credit ending / offer morshu weed for credit","\n","^Don't try this in real life ;) ","end","\n",{"#f":1}],"rob_morshu":["^You point the gun you stole at Morshu","\n","^Morshu: no, please! I have family...","\n","^Morshu: SIKE! Catch this bomb!","\n","^Morshu threw a bomb at you and you exploded","\n","^You got: robbery ending / rob morshu","\n","^Thanks for playing!....and robbing ","end","\n",{"#f":1}],"morshu_talk":[["^What will you talk about? (Topics update during your play through the game)","\n","^Check back to this menu every time you find something new!","\n","ev","str","^Nothing, go back","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^The town","/str",{"CNT?":"town"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^The dark street","/str",{"CNT?":"dark_street"},"/ev",{"*":".^.c-2","flg":21},"ev","str","^The secret door and the abandoned shop","/str",{"CNT?":"new_shop"},"/ev",{"*":".^.c-3","flg":21},"ev","str","^Shop with the sleeping cashier","/str",{"CNT?":"small_shop"},"/ev",{"*":".^.c-4","flg":21},"ev","str","^Guy offering weed","/str",{"CNT?":"talk_to_man"},"/ev",{"*":".^.c-5","flg":21},{"c-0":["\n",{"->":"morshu_shop"},{"#f":5}],"c-1":["\n","^Morshu: ah, the town? Why am I not there?","\n","^Morshu: I just scare everyone who sees my face! Hahaha...","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["\n","^Morshu: stay away from that place! Please...","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["\n","^You have a feeling that you really shouldn't tell Morshu about that place","\n",{"->":".^.^.^"},{"#f":5}],"c-4":["\n","^Morshu: ah, that guy? He is always sleeping, and you really can't wake him up.","\n","^Morshu: ...what if he isn't sleeping, but rather...","\n","^Morshu: umm, nevermind, forget it","\n",{"->":".^.^.^"},{"#f":5}],"c-5":["\n","^Morshu: weed you say? Ha, im his loyal customer!","\n",{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"morshu_tell_a_secret":["^You tell Morshu that you have been to every location in this game.","\n","^You got everything you could, including a gun, some weed and even a whole shop.","\n","^Morshu seems impressed...","\n","^Morshu: thank you for playing my game and doing everything you can in a","\n","^single run! You may even speedrun it if you want ;)","\n","^You got: Secret ending / 99% completion","\n","^Thanks for the dedication to find this ending! See you soon ;) ","end","\n",{"#f":1}],"global decl":["ev",0,{"VAR=":"rubies"},"/ev","end",null],"#f":1}],"listDefs":{}};