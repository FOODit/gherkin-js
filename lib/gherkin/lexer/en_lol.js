
/* line 1 "ragel/i18n/en_lol.js.rl" */
;(function() {


/* line 126 "ragel/i18n/en_lol.js.rl" */



/* line 11 "js/lib/gherkin/lexer/en_lol.js" */
var _lexer_actions = [
	0, 1, 0, 1, 1, 1, 2, 1, 
	3, 1, 4, 1, 5, 1, 6, 1, 
	7, 1, 8, 1, 9, 1, 10, 1, 
	11, 1, 12, 1, 13, 1, 16, 1, 
	17, 1, 18, 1, 19, 1, 20, 1, 
	21, 1, 22, 1, 23, 2, 2, 18, 
	2, 3, 4, 2, 13, 0, 2, 14, 
	15, 2, 17, 0, 2, 17, 1, 2, 
	17, 16, 2, 17, 19, 2, 18, 6, 
	2, 18, 7, 2, 18, 8, 2, 18, 
	9, 2, 18, 10, 2, 18, 16, 2, 
	20, 21, 2, 22, 0, 2, 22, 1, 
	2, 22, 16, 2, 22, 19, 3, 4, 
	14, 15, 3, 5, 14, 15, 3, 11, 
	14, 15, 3, 12, 14, 15, 3, 13, 
	14, 15, 3, 14, 15, 18, 3, 17, 
	0, 11, 3, 17, 14, 15, 4, 2, 
	14, 15, 18, 4, 3, 4, 14, 15, 
	4, 17, 0, 14, 15, 5, 17, 0, 
	11, 14, 15
];

var _lexer_key_offsets = [
	0, 0, 19, 37, 38, 39, 41, 43, 
	48, 53, 58, 63, 67, 71, 73, 74, 
	75, 76, 77, 78, 79, 80, 81, 82, 
	83, 84, 85, 86, 87, 88, 89, 91, 
	93, 98, 105, 110, 111, 113, 114, 115, 
	116, 131, 133, 135, 137, 139, 141, 143, 
	145, 147, 149, 151, 153, 155, 157, 159, 
	161, 179, 180, 181, 182, 183, 184, 185, 
	186, 187, 188, 189, 196, 198, 200, 202, 
	204, 206, 208, 209, 210, 211, 212, 213, 
	214, 215, 216, 217, 218, 219, 220, 221, 
	223, 224, 225, 226, 227, 228, 229, 230, 
	231, 246, 248, 250, 252, 254, 256, 258, 
	260, 262, 264, 266, 268, 270, 272, 274, 
	276, 278, 280, 282, 284, 286, 288, 290, 
	292, 294, 296, 298, 300, 302, 304, 306, 
	308, 310, 312, 314, 316, 318, 320, 322, 
	323, 324, 339, 341, 343, 345, 347, 349, 
	351, 353, 355, 357, 359, 361, 363, 365, 
	367, 369, 371, 374, 376, 378, 380, 382, 
	384, 386, 388, 390, 392, 394, 396, 398, 
	400, 402, 404, 406, 409, 411, 413, 415, 
	417, 419, 421, 423, 425, 427, 429, 430, 
	431, 432, 433, 434, 435, 436, 437, 448, 
	450, 452, 454, 456, 458, 460, 462, 464, 
	466, 468, 470, 472, 474, 476, 478, 480, 
	482, 484, 486, 488, 490, 492, 494, 496, 
	498, 500, 502, 505, 507, 509, 511, 513, 
	515, 517, 519, 521, 523, 525, 529, 535, 
	538, 540, 546, 564, 566, 568, 570, 572, 
	574, 576, 578, 580, 582, 584, 586, 588, 
	590, 592, 594, 596, 598, 601, 603, 605, 
	607, 609, 611, 613, 615, 617, 619, 621, 
	623, 624, 625, 626
];

var _lexer_trans_keys = [
	10, 32, 34, 35, 37, 42, 64, 65, 
	66, 68, 69, 73, 77, 79, 87, 124, 
	239, 9, 13, 10, 32, 34, 35, 37, 
	42, 64, 65, 66, 68, 69, 73, 77, 
	79, 87, 124, 9, 13, 34, 34, 10, 
	13, 10, 13, 10, 32, 34, 9, 13, 
	10, 32, 34, 9, 13, 10, 32, 34, 
	9, 13, 10, 32, 34, 9, 13, 10, 
	32, 9, 13, 10, 32, 9, 13, 10, 
	13, 10, 95, 70, 69, 65, 84, 85, 
	82, 69, 95, 69, 78, 68, 95, 37, 
	32, 10, 13, 10, 13, 13, 32, 64, 
	9, 10, 9, 10, 13, 32, 64, 11, 
	12, 10, 32, 64, 9, 13, 78, 52, 
	85, 58, 10, 10, 10, 32, 35, 37, 
	42, 64, 65, 66, 68, 73, 77, 79, 
	87, 9, 13, 10, 95, 10, 70, 10, 
	69, 10, 65, 10, 84, 10, 85, 10, 
	82, 10, 69, 10, 95, 10, 69, 10, 
	78, 10, 68, 10, 95, 10, 37, 10, 
	32, 10, 32, 34, 35, 37, 42, 64, 
	65, 66, 68, 69, 73, 77, 79, 87, 
	124, 9, 13, 69, 88, 65, 77, 80, 
	76, 90, 58, 10, 10, 10, 32, 35, 
	79, 124, 9, 13, 10, 72, 10, 32, 
	10, 72, 10, 65, 10, 73, 10, 58, 
	32, 67, 65, 78, 32, 72, 65, 90, 
	73, 83, 72, 85, 78, 32, 58, 83, 
	82, 83, 76, 89, 58, 10, 10, 10, 
	32, 35, 37, 42, 64, 65, 66, 68, 
	73, 77, 79, 87, 9, 13, 10, 95, 
	10, 70, 10, 69, 10, 65, 10, 84, 
	10, 85, 10, 82, 10, 69, 10, 95, 
	10, 69, 10, 78, 10, 68, 10, 95, 
	10, 37, 10, 32, 10, 78, 10, 85, 
	10, 84, 10, 69, 10, 32, 10, 67, 
	10, 65, 10, 78, 10, 32, 10, 72, 
	10, 65, 10, 90, 10, 73, 10, 83, 
	10, 72, 10, 85, 10, 78, 10, 58, 
	10, 72, 10, 32, 10, 72, 10, 65, 
	10, 73, 10, 10, 10, 32, 35, 37, 
	42, 64, 65, 66, 68, 73, 77, 79, 
	87, 9, 13, 10, 95, 10, 70, 10, 
	69, 10, 65, 10, 84, 10, 85, 10, 
	82, 10, 69, 10, 95, 10, 69, 10, 
	78, 10, 68, 10, 95, 10, 37, 10, 
	32, 10, 78, 10, 52, 85, 10, 58, 
	10, 84, 10, 69, 10, 32, 10, 67, 
	10, 65, 10, 78, 10, 32, 10, 72, 
	10, 65, 10, 90, 10, 73, 10, 83, 
	10, 72, 10, 85, 10, 78, 10, 32, 
	58, 10, 83, 10, 82, 10, 83, 10, 
	76, 10, 89, 10, 72, 10, 32, 10, 
	72, 10, 65, 10, 73, 72, 32, 72, 
	65, 73, 58, 10, 10, 10, 32, 35, 
	37, 64, 66, 69, 77, 79, 9, 13, 
	10, 95, 10, 70, 10, 69, 10, 65, 
	10, 84, 10, 85, 10, 82, 10, 69, 
	10, 95, 10, 69, 10, 78, 10, 68, 
	10, 95, 10, 37, 10, 52, 10, 58, 
	10, 88, 10, 65, 10, 77, 10, 80, 
	10, 76, 10, 90, 10, 73, 10, 83, 
	10, 72, 10, 85, 10, 78, 10, 32, 
	58, 10, 83, 10, 82, 10, 83, 10, 
	76, 10, 89, 10, 72, 10, 32, 10, 
	72, 10, 65, 10, 73, 32, 124, 9, 
	13, 10, 32, 92, 124, 9, 13, 10, 
	92, 124, 10, 92, 10, 32, 92, 124, 
	9, 13, 10, 32, 34, 35, 37, 42, 
	64, 65, 66, 68, 69, 73, 77, 79, 
	87, 124, 9, 13, 10, 78, 10, 85, 
	10, 84, 10, 69, 10, 32, 10, 67, 
	10, 65, 10, 78, 10, 32, 10, 72, 
	10, 65, 10, 90, 10, 73, 10, 83, 
	10, 72, 10, 85, 10, 78, 10, 32, 
	58, 10, 83, 10, 82, 10, 83, 10, 
	76, 10, 89, 10, 58, 10, 72, 10, 
	32, 10, 72, 10, 65, 10, 73, 84, 
	187, 191, 0
];

var _lexer_single_lengths = [
	0, 17, 16, 1, 1, 2, 2, 3, 
	3, 3, 3, 2, 2, 2, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 2, 2, 
	3, 5, 3, 1, 2, 1, 1, 1, 
	13, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	16, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 5, 2, 2, 2, 2, 
	2, 2, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 2, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	13, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 1, 
	1, 13, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 3, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 3, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 1, 1, 
	1, 1, 1, 1, 1, 1, 9, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 3, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 4, 3, 
	2, 4, 16, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 3, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	1, 1, 1, 0
];

var _lexer_range_lengths = [
	0, 1, 1, 0, 0, 0, 0, 1, 
	1, 1, 1, 1, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 1, 1, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 1, 1, 0, 
	0, 1, 1, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0
];

var _lexer_index_offsets = [
	0, 0, 19, 37, 39, 41, 44, 47, 
	52, 57, 62, 67, 71, 75, 78, 80, 
	82, 84, 86, 88, 90, 92, 94, 96, 
	98, 100, 102, 104, 106, 108, 110, 113, 
	116, 121, 128, 133, 135, 138, 140, 142, 
	144, 159, 162, 165, 168, 171, 174, 177, 
	180, 183, 186, 189, 192, 195, 198, 201, 
	204, 222, 224, 226, 228, 230, 232, 234, 
	236, 238, 240, 242, 249, 252, 255, 258, 
	261, 264, 267, 269, 271, 273, 275, 277, 
	279, 281, 283, 285, 287, 289, 291, 293, 
	296, 298, 300, 302, 304, 306, 308, 310, 
	312, 327, 330, 333, 336, 339, 342, 345, 
	348, 351, 354, 357, 360, 363, 366, 369, 
	372, 375, 378, 381, 384, 387, 390, 393, 
	396, 399, 402, 405, 408, 411, 414, 417, 
	420, 423, 426, 429, 432, 435, 438, 441, 
	443, 445, 460, 463, 466, 469, 472, 475, 
	478, 481, 484, 487, 490, 493, 496, 499, 
	502, 505, 508, 512, 515, 518, 521, 524, 
	527, 530, 533, 536, 539, 542, 545, 548, 
	551, 554, 557, 560, 564, 567, 570, 573, 
	576, 579, 582, 585, 588, 591, 594, 596, 
	598, 600, 602, 604, 606, 608, 610, 621, 
	624, 627, 630, 633, 636, 639, 642, 645, 
	648, 651, 654, 657, 660, 663, 666, 669, 
	672, 675, 678, 681, 684, 687, 690, 693, 
	696, 699, 702, 706, 709, 712, 715, 718, 
	721, 724, 727, 730, 733, 736, 740, 746, 
	750, 753, 759, 777, 780, 783, 786, 789, 
	792, 795, 798, 801, 804, 807, 810, 813, 
	816, 819, 822, 825, 828, 832, 835, 838, 
	841, 844, 847, 850, 853, 856, 859, 862, 
	865, 867, 869, 871
];

var _lexer_indicies = [
	2, 1, 3, 4, 5, 6, 7, 8, 
	9, 10, 11, 12, 13, 14, 10, 15, 
	16, 1, 0, 2, 1, 3, 4, 5, 
	6, 7, 8, 9, 10, 11, 12, 13, 
	14, 10, 15, 1, 0, 17, 0, 18, 
	0, 20, 21, 19, 23, 24, 22, 27, 
	26, 28, 26, 25, 31, 30, 32, 30, 
	29, 31, 30, 33, 30, 29, 31, 30, 
	34, 30, 29, 36, 35, 35, 0, 2, 
	37, 37, 0, 39, 40, 38, 2, 0, 
	41, 0, 42, 0, 43, 0, 44, 0, 
	45, 0, 46, 0, 47, 0, 48, 0, 
	49, 0, 50, 0, 51, 0, 52, 0, 
	53, 0, 54, 0, 55, 0, 57, 58, 
	56, 60, 61, 59, 0, 0, 0, 0, 
	62, 63, 64, 63, 63, 66, 65, 62, 
	2, 67, 7, 67, 0, 68, 0, 69, 
	70, 0, 71, 0, 73, 72, 75, 74, 
	75, 76, 77, 78, 79, 77, 80, 81, 
	82, 83, 84, 85, 82, 76, 74, 75, 
	86, 74, 75, 87, 74, 75, 88, 74, 
	75, 89, 74, 75, 90, 74, 75, 91, 
	74, 75, 92, 74, 75, 93, 74, 75, 
	94, 74, 75, 95, 74, 75, 96, 74, 
	75, 97, 74, 75, 98, 74, 75, 99, 
	74, 75, 100, 74, 102, 101, 103, 104, 
	105, 106, 107, 108, 109, 110, 111, 112, 
	113, 114, 110, 115, 101, 0, 116, 0, 
	117, 0, 118, 0, 119, 0, 120, 0, 
	121, 0, 122, 0, 123, 0, 125, 124, 
	127, 126, 127, 128, 129, 130, 129, 128, 
	126, 127, 131, 126, 127, 132, 126, 127, 
	133, 126, 127, 134, 126, 127, 135, 126, 
	127, 136, 126, 137, 0, 138, 0, 139, 
	0, 140, 0, 141, 0, 142, 0, 143, 
	0, 68, 0, 144, 0, 145, 0, 146, 
	0, 147, 0, 148, 0, 149, 150, 0, 
	151, 0, 152, 0, 153, 0, 154, 0, 
	155, 0, 156, 0, 158, 157, 160, 159, 
	160, 161, 162, 163, 164, 162, 165, 166, 
	167, 168, 169, 170, 167, 161, 159, 160, 
	171, 159, 160, 172, 159, 160, 173, 159, 
	160, 174, 159, 160, 175, 159, 160, 176, 
	159, 160, 177, 159, 160, 178, 159, 160, 
	179, 159, 160, 180, 159, 160, 181, 159, 
	160, 182, 159, 160, 183, 159, 160, 184, 
	159, 160, 185, 159, 160, 186, 159, 160, 
	187, 159, 160, 186, 159, 160, 188, 159, 
	160, 189, 159, 160, 190, 159, 160, 191, 
	159, 160, 192, 159, 160, 193, 159, 160, 
	194, 159, 160, 195, 159, 160, 186, 159, 
	160, 196, 159, 160, 197, 159, 160, 198, 
	159, 160, 199, 159, 160, 200, 159, 160, 
	185, 159, 160, 201, 159, 160, 202, 159, 
	160, 203, 159, 160, 204, 159, 160, 200, 
	159, 206, 205, 208, 207, 208, 209, 210, 
	211, 212, 210, 213, 214, 215, 216, 217, 
	218, 215, 209, 207, 208, 219, 207, 208, 
	220, 207, 208, 221, 207, 208, 222, 207, 
	208, 223, 207, 208, 224, 207, 208, 225, 
	207, 208, 226, 207, 208, 227, 207, 208, 
	228, 207, 208, 229, 207, 208, 230, 207, 
	208, 231, 207, 208, 232, 207, 208, 233, 
	207, 208, 234, 207, 208, 235, 236, 207, 
	208, 233, 207, 208, 234, 207, 208, 237, 
	207, 208, 238, 207, 208, 239, 207, 208, 
	240, 207, 208, 241, 207, 208, 242, 207, 
	208, 243, 207, 208, 244, 207, 208, 234, 
	207, 208, 245, 207, 208, 246, 207, 208, 
	247, 207, 208, 248, 207, 208, 249, 207, 
	208, 250, 233, 207, 208, 251, 207, 208, 
	252, 207, 208, 253, 207, 208, 254, 207, 
	208, 235, 207, 208, 255, 207, 208, 256, 
	207, 208, 257, 207, 208, 258, 207, 208, 
	235, 207, 259, 0, 260, 0, 261, 0, 
	262, 0, 263, 0, 264, 0, 266, 265, 
	268, 267, 268, 269, 270, 271, 270, 272, 
	273, 274, 275, 269, 267, 268, 276, 267, 
	268, 277, 267, 268, 278, 267, 268, 279, 
	267, 268, 280, 267, 268, 281, 267, 268, 
	282, 267, 268, 283, 267, 268, 284, 267, 
	268, 285, 267, 268, 286, 267, 268, 287, 
	267, 268, 288, 267, 268, 289, 267, 268, 
	290, 267, 268, 291, 267, 268, 292, 267, 
	268, 293, 267, 268, 294, 267, 268, 295, 
	267, 268, 296, 267, 268, 290, 267, 268, 
	297, 267, 268, 298, 267, 268, 299, 267, 
	268, 300, 267, 268, 301, 267, 268, 302, 
	291, 267, 268, 303, 267, 268, 304, 267, 
	268, 305, 267, 268, 306, 267, 268, 290, 
	267, 268, 307, 267, 268, 308, 267, 268, 
	309, 267, 268, 310, 267, 268, 290, 267, 
	311, 312, 311, 0, 315, 314, 316, 317, 
	314, 313, 0, 319, 320, 318, 0, 319, 
	318, 315, 321, 319, 320, 321, 318, 315, 
	322, 323, 324, 325, 326, 327, 328, 329, 
	330, 331, 332, 333, 334, 330, 335, 322, 
	0, 75, 336, 74, 75, 337, 74, 75, 
	336, 74, 75, 338, 74, 75, 339, 74, 
	75, 340, 74, 75, 341, 74, 75, 342, 
	74, 75, 343, 74, 75, 344, 74, 75, 
	345, 74, 75, 336, 74, 75, 346, 74, 
	75, 347, 74, 75, 348, 74, 75, 349, 
	74, 75, 350, 74, 75, 351, 100, 74, 
	75, 352, 74, 75, 353, 74, 75, 354, 
	74, 75, 355, 74, 75, 356, 74, 75, 
	100, 74, 75, 357, 74, 75, 358, 74, 
	75, 359, 74, 75, 360, 74, 75, 356, 
	74, 68, 0, 361, 0, 1, 0, 362, 
	0
];

var _lexer_trans_targs = [
	0, 2, 2, 3, 13, 15, 29, 32, 
	35, 36, 57, 58, 74, 82, 182, 229, 
	265, 4, 5, 6, 7, 6, 6, 7, 
	6, 8, 8, 8, 9, 8, 8, 8, 
	9, 10, 11, 12, 2, 12, 13, 2, 
	14, 16, 17, 18, 19, 20, 21, 22, 
	23, 24, 25, 26, 27, 28, 267, 30, 
	31, 2, 14, 31, 2, 14, 33, 34, 
	2, 33, 32, 34, 29, 37, 264, 38, 
	39, 40, 39, 40, 40, 2, 41, 55, 
	235, 236, 238, 239, 247, 259, 42, 43, 
	44, 45, 46, 47, 48, 49, 50, 51, 
	52, 53, 54, 2, 56, 2, 2, 3, 
	13, 15, 29, 32, 35, 36, 57, 58, 
	74, 82, 182, 229, 35, 59, 60, 61, 
	62, 63, 64, 65, 66, 67, 66, 67, 
	67, 2, 68, 69, 70, 71, 72, 73, 
	56, 75, 76, 77, 78, 79, 80, 81, 
	83, 84, 85, 86, 87, 88, 135, 89, 
	90, 91, 92, 93, 94, 95, 96, 95, 
	96, 96, 2, 97, 111, 112, 113, 115, 
	116, 124, 130, 98, 99, 100, 101, 102, 
	103, 104, 105, 106, 107, 108, 109, 110, 
	2, 56, 111, 114, 112, 117, 118, 119, 
	120, 121, 122, 123, 125, 126, 127, 128, 
	129, 131, 132, 133, 134, 136, 137, 136, 
	137, 137, 2, 138, 152, 153, 154, 157, 
	158, 166, 177, 139, 140, 141, 142, 143, 
	144, 145, 146, 147, 148, 149, 150, 151, 
	2, 56, 152, 155, 156, 153, 159, 160, 
	161, 162, 163, 164, 165, 167, 168, 169, 
	170, 171, 172, 173, 174, 175, 176, 178, 
	179, 180, 181, 183, 184, 185, 186, 187, 
	188, 189, 190, 189, 190, 190, 2, 191, 
	205, 207, 213, 224, 192, 193, 194, 195, 
	196, 197, 198, 199, 200, 201, 202, 203, 
	204, 2, 206, 56, 208, 209, 210, 211, 
	212, 214, 215, 216, 217, 218, 219, 220, 
	221, 222, 223, 225, 226, 227, 228, 229, 
	230, 231, 233, 234, 232, 230, 231, 232, 
	230, 233, 234, 3, 13, 15, 29, 32, 
	35, 36, 57, 58, 74, 82, 182, 229, 
	55, 237, 235, 240, 241, 242, 243, 244, 
	245, 246, 248, 249, 250, 251, 252, 253, 
	254, 255, 256, 257, 258, 260, 261, 262, 
	263, 266, 0
];

var _lexer_trans_actions = [
	43, 0, 54, 3, 1, 0, 29, 1, 
	29, 29, 29, 29, 29, 29, 29, 35, 
	0, 0, 0, 7, 139, 48, 0, 102, 
	9, 5, 45, 134, 45, 0, 33, 122, 
	33, 33, 0, 11, 106, 0, 0, 114, 
	25, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	57, 149, 126, 0, 110, 23, 0, 27, 
	118, 27, 51, 0, 0, 0, 0, 0, 
	57, 144, 0, 54, 0, 72, 33, 84, 
	84, 84, 84, 84, 84, 84, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 15, 15, 31, 130, 60, 
	57, 31, 63, 57, 63, 63, 63, 63, 
	63, 63, 63, 66, 0, 0, 0, 0, 
	0, 0, 0, 0, 57, 144, 0, 54, 
	0, 81, 84, 0, 0, 0, 0, 0, 
	21, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 57, 144, 0, 
	54, 0, 78, 33, 84, 84, 84, 84, 
	84, 84, 84, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	19, 19, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 57, 144, 0, 
	54, 0, 75, 33, 84, 84, 84, 84, 
	84, 84, 84, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	17, 17, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 57, 144, 0, 54, 0, 69, 33, 
	84, 84, 84, 84, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 13, 0, 13, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 37, 37, 54, 37, 87, 0, 0, 
	39, 0, 0, 93, 90, 41, 96, 90, 
	96, 96, 96, 96, 96, 96, 96, 99, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0
];

var _lexer_eof_actions = [
	0, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43
];

var lexer_start = 1;
var lexer_first_final = 267;
var lexer_error = 0;

var lexer_en_main = 1;


/* line 129 "ragel/i18n/en_lol.js.rl" */

/* line 130 "ragel/i18n/en_lol.js.rl" */

/* line 131 "ragel/i18n/en_lol.js.rl" */

/* line 132 "ragel/i18n/en_lol.js.rl" */

var Lexer = function(listener) {
  // Check that listener has the required functions
  var events = ['comment', 'tag', 'feature', 'background', 'scenario', 'scenario_outline', 'examples', 'step', 'doc_string', 'row', 'eof'];
  for(var i=0, len=events.length; i<len; i++) {
    var event = events[i];
    if(typeof listener[event] != 'function') {
      throw new Error("Error. No " + event + " function exists on " + JSON.stringify(listener));
    }
  }
  this.listener = listener;
};

Lexer.prototype.scan = function(data) {
  var ending = "\n%_FEATURE_END_%";
  if(typeof data == 'string') {
    data = this.stringToBytes(data + ending);
  } else if(typeof Buffer != 'undefined' && Buffer.isBuffer(data)) {
    // Node.js
    var buf = new Buffer(data.length + ending.length);
    data.copy(buf, 0, 0);
    new Buffer(ending).copy(buf, data.length, 0);
    data = buf;
  }
  var eof = pe = data.length;
  var p = 0;

  this.line_number = 1;
  this.last_newline = 0;
  var signedCharValue=function(v){return v > 127 ? v-256 : v; };

  
/* line 559 "js/lib/gherkin/lexer/en_lol.js" */
{
	  this.cs = lexer_start;
} /* JSCodeGen::writeInit */

/* line 164 "ragel/i18n/en_lol.js.rl" */
  
/* line 566 "js/lib/gherkin/lexer/en_lol.js" */
{
	var _klen, _trans, _keys, _ps, _widec, _acts, _nacts;
	var _goto_level, _resume, _eof_trans, _again, _test_eof;
	var _out;
	_klen = _trans = _keys = _acts = _nacts = null;
	_goto_level = 0;
	_resume = 10;
	_eof_trans = 15;
	_again = 20;
	_test_eof = 30;
	_out = 40;
	while (true) {
	_trigger_goto = false;
	if (_goto_level <= 0) {
	if (p == pe) {
		_goto_level = _test_eof;
		continue;
	}
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	}
	if (_goto_level <= _resume) {
	_keys = _lexer_key_offsets[ this.cs];
	_trans = _lexer_index_offsets[ this.cs];
	_klen = _lexer_single_lengths[ this.cs];
	_break_match = false;
	
	do {
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + _klen - 1;

	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + ( (_upper - _lower) >> 1 );

	        if (( signedCharValue(data[p])) < _lexer_trans_keys[_mid]) {
	           _upper = _mid - 1;
	        } else if (( signedCharValue(data[p])) > _lexer_trans_keys[_mid]) {
	           _lower = _mid + 1;
	        } else {
	           _trans += (_mid - _keys);
	           _break_match = true;
	           break;
	        };
	     } /* while */
	     if (_break_match) { break; }
	     _keys += _klen;
	     _trans += _klen;
	  }
	  _klen = _lexer_range_lengths[ this.cs];
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + (_klen << 1) - 2;
	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + (((_upper-_lower) >> 1) & ~1);
	        if (( signedCharValue(data[p])) < _lexer_trans_keys[_mid]) {
	          _upper = _mid - 2;
	         } else if (( signedCharValue(data[p])) > _lexer_trans_keys[_mid+1]) {
	          _lower = _mid + 2;
	        } else {
	          _trans += ((_mid - _keys) >> 1);
	          _break_match = true;
	          break;
	        }
	     } /* while */
	     if (_break_match) { break; }
	     _trans += _klen
	  }
	} while (false);
	_trans = _lexer_indicies[_trans];
	 this.cs = _lexer_trans_targs[_trans];
	if (_lexer_trans_actions[_trans] != 0) {
		_acts = _lexer_trans_actions[_trans];
		_nacts = _lexer_actions[_acts];
		_acts += 1;
		while (_nacts > 0) {
			_nacts -= 1;
			_acts += 1;
			switch (_lexer_actions[_acts - 1]) {
case 0:
/* line 6 "ragel/i18n/en_lol.js.rl" */

    this.content_start = p;
    this.current_line = this.line_number;
    this.start_col = p - this.last_newline - (this.keyword+':').length;
  		break;
case 1:
/* line 12 "ragel/i18n/en_lol.js.rl" */

    this.current_line = this.line_number;
    this.start_col = p - this.last_newline;
  		break;
case 2:
/* line 17 "ragel/i18n/en_lol.js.rl" */

    this.content_start = p;
  		break;
case 3:
/* line 21 "ragel/i18n/en_lol.js.rl" */

    this.docstring_content_type_start = p;
  		break;
case 4:
/* line 25 "ragel/i18n/en_lol.js.rl" */

    this.docstring_content_type_end = p;
  		break;
case 5:
/* line 29 "ragel/i18n/en_lol.js.rl" */

    var con = this.unindent(
      this.start_col, 
      this.bytesToString(data.slice(this.content_start, this.next_keyword_start-1)).replace(/(\r?\n)?([\t ])*$/, '').replace(/\\\"\\\"\\\"/mg, '"""')
    );
    var con_type = this.bytesToString(data.slice(this.docstring_content_type_start, this.docstring_content_type_end)).trim();
    this.listener.doc_string(con_type, con, this.current_line); 
  		break;
case 6:
/* line 38 "ragel/i18n/en_lol.js.rl" */

    p = this.store_keyword_content('feature', data, p, eof);
  		break;
case 7:
/* line 42 "ragel/i18n/en_lol.js.rl" */

    p = this.store_keyword_content('background', data, p, eof);
  		break;
case 8:
/* line 46 "ragel/i18n/en_lol.js.rl" */

    p = this.store_keyword_content('scenario', data, p, eof);
  		break;
case 9:
/* line 50 "ragel/i18n/en_lol.js.rl" */

    p = this.store_keyword_content('scenario_outline', data, p, eof);
  		break;
case 10:
/* line 54 "ragel/i18n/en_lol.js.rl" */

    p = this.store_keyword_content('examples', data, p, eof);
  		break;
case 11:
/* line 58 "ragel/i18n/en_lol.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.step(this.keyword, con, this.current_line);
  		break;
case 12:
/* line 63 "ragel/i18n/en_lol.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.comment(con, this.line_number);
    this.keyword_start = null;
  		break;
case 13:
/* line 69 "ragel/i18n/en_lol.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.tag(con, this.line_number);
    this.keyword_start = null;
  		break;
case 14:
/* line 75 "ragel/i18n/en_lol.js.rl" */

    this.line_number++;
  		break;
case 15:
/* line 79 "ragel/i18n/en_lol.js.rl" */

    this.last_newline = p + 1;
  		break;
case 16:
/* line 83 "ragel/i18n/en_lol.js.rl" */

    this.keyword_start = this.keyword_start || p;
  		break;
case 17:
/* line 87 "ragel/i18n/en_lol.js.rl" */

    this.keyword = this.bytesToString(data.slice(this.keyword_start, p)).replace(/:$/, '');
    this.keyword_start = null;
  		break;
case 18:
/* line 92 "ragel/i18n/en_lol.js.rl" */

    this.next_keyword_start = p;
  		break;
case 19:
/* line 96 "ragel/i18n/en_lol.js.rl" */

    p = p - 1;
    current_row = [];
    this.current_line = this.line_number;
  		break;
case 20:
/* line 102 "ragel/i18n/en_lol.js.rl" */

    this.content_start = p;
  		break;
case 21:
/* line 106 "ragel/i18n/en_lol.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    current_row.push(con.replace(/\\\|/, "|").replace(/\\n/, "\n").replace(/\\\\/, "\\"));
  		break;
case 22:
/* line 111 "ragel/i18n/en_lol.js.rl" */

    this.listener.row(current_row, this.current_line);
  		break;
case 23:
/* line 115 "ragel/i18n/en_lol.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw new Error("Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/cucumber/gherkin/lexingerror for more information.");
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 793 "js/lib/gherkin/lexer/en_lol.js" */
			} /* action switch */
		}
	}
	if (_trigger_goto) {
		continue;
	}
	}
	if (_goto_level <= _again) {
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	p += 1;
	if (p != pe) {
		_goto_level = _resume;
		continue;
	}
	}
	if (_goto_level <= _test_eof) {
	if (p == eof) {
	__acts = _lexer_eof_actions[ this.cs];
	__nacts =  _lexer_actions[__acts];
	__acts += 1;
	while (__nacts > 0) {
		__nacts -= 1;
		__acts += 1;
		switch (_lexer_actions[__acts - 1]) {
case 23:
/* line 115 "ragel/i18n/en_lol.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw new Error("Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/cucumber/gherkin/lexingerror for more information.");
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 832 "js/lib/gherkin/lexer/en_lol.js" */
		} /* eof action switch */
	}
	if (_trigger_goto) {
		continue;
	}
}
	}
	if (_goto_level <= _out) {
		break;
	}
	}
	}

/* line 165 "ragel/i18n/en_lol.js.rl" */
};


/*
 * Decode utf-8 byte sequence to string.
 */
var decodeUtf8 = function(bytes) {
  var result = "";
  var i = 0;
  var wc;
  var c;

  while (i < bytes.length) {
    /* parse as UTF-8 lead byte */
    wc = bytes[i++];
    if (wc < 0x80) {
      count = 0;
    } else if (wc < 0xC2 || wc >= 0xF8) {
      throw new Error("input is not a valid UTF-8 lead octet");
    } else if (wc < 0xE0) {
      count = 1;
      wc = (wc & 0x1F) << 6;
    } else if (wc < 0xF0) {
      count = 2;
      wc = (wc & 0x0F) << 12;
    } else /* wc < 0xF8 */ {
      count = 3;
      wc = (wc & 0x07) << 18;
    }

    /* parse trail bytes, if any */
    while (count) {
      if (!(i < bytes.length)) {
        throw new Error("short read");
      }
      if ((c = bytes[i++] ^ 0x80) > 0x3F) {
        throw new Error("input is not a valid UTF-8 trail octet");
      }
      wc |= c << (6 * --count);
      if (wc < (1 << (5 * count + 6))) {
        throw new Error("invalid non-minimal encoded input");
      }
    }

    /* handle conversion to UTF-16 if needed */
    if (wc > 0xFFFF) {
      wc -= 0x10000;
      result += String.fromCharCode(0xD800 + (wc >> 10));
      wc = 0xDC00 + (wc & 0x3FF);
    }
    result += String.fromCharCode(wc);
  }

  return result;
};

/*
 * Encode string to an array of bytes using utf8 encoding.
 *
 * Javascript internally stores character data as utf16 (like java).
 * String.charCodeAt() does *not* produce unicode points, but simply
 * reflects this internal representation. Thus, it is necessary
 * to first decode the utf-16 representation before encoding to
 * utf-8.
 */
var encodeUtf8 = function(string) {
  var bytes = [];
  var i = 0;
  var j = 0;
  var wc;

  while (i < string.length) {
    wc = string.charCodeAt(i++);
    if (wc >= 0xD800 && wc <= 0xDBFF && i < string.length && string.charCodeAt(i) >= 0xDC00 && string.charCodeAt(i) <= 0xDFFF) {
      /* decode UTF-16 */
      wc = 0x10000 + ((wc & 0x3FF) << 10) + (string.charCodeAt(i++) & 0x3FF);
    }

    /* emit lead byte */
    if (wc < 0x80) {
      bytes[j++] = wc;
      count = 0;
    } else if (wc < 0x800) {
      bytes[j++] = 0xC0 | (wc >> 6);
      count = 1;
    } else if (wc < 0x10000) {
      bytes[j++] = 0xE0 | (wc >> 12);
      count = 2;
    } else {
      /* SMP: 21-bit Unicode */
      bytes[j++] = 0xF0 | (wc >> 18);
      count = 3;
    }

    /* emit trail bytes, if any */
    while (count) {
      bytes[j++] = 0x80 | ((wc >> (6 * --count)) & 0x3F);
    }
  }

  return bytes;

};

Lexer.prototype.bytesToString = function(bytes) {
  if(typeof bytes.write == 'function') {
    // Node.js
    return bytes.toString('utf-8');
  }
  return decodeUtf8(bytes);
};

Lexer.prototype.stringToBytes = function(string) {
  return encodeUtf8(string);
};

Lexer.prototype.unindent = function(startcol, text) {
  startcol = startcol || 0;
  return text.replace(new RegExp('^[\t ]{0,' + startcol + '}', 'gm'), ''); 
};

Lexer.prototype.store_keyword_content = function(event, data, p, eof) {
  var end_point = (!this.next_keyword_start || (p == eof)) ? p : this.next_keyword_start;
  var content = this.unindent(this.start_col + 2, this.bytesToString(data.slice(this.content_start, end_point))).replace(/\s+$/,"");
  var content_lines = content.split("\n")
  var name = content_lines.shift() || "";
  name = name.trim();
  var description = content_lines.join("\n");
  this.listener[event](this.keyword, name, description, this.current_line);
  var nks = this.next_keyword_start;
  this.next_keyword_start = null;
  return nks ? nks - 1 : p;
};

Lexer.prototype.current_line_content = function(data, p) {
  var rest = Array.prototype.slice.call(data,this.last_newline, -1);
  var end = rest.indexOf(10) || -1;
  return this.bytesToString(rest.slice(0, end)).trim();
};

// Node.js export
if(typeof module !== 'undefined') {
  module.exports = Lexer;
}
// Require.js export
if (typeof define !== 'undefined') {
  if(define.amd) {
    define('gherkin/lexer/en_lol', [], function() {
      return Lexer;
    });
  } else {
    define('gherkin/lexer/en_lol', function(require, exports, module) {
      exports.Lexer = Lexer;
    });
  }
}

})();
