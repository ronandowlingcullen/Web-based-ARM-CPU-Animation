"use strict"

function dlx(vplayer) {

	const ABSOLUTE = vplayer.ABSOLUTE
	const ARROW60_END = vplayer.ARROW60_END
	const BEVEL_JOIN = vplayer.BEVEL_JOIN
	const BLACK = vplayer.BLACK
	const BOLD = vplayer.BOLD
	const BUTT_END = vplayer.BUTT_END
	const DASH = vplayer.DASH
	const DOT = vplayer.DOT
	const GRAY192 = vplayer.GRAY192
	const GRAY224 = vplayer.GRAY224
	const GRAY64 = vplayer.GRAY64
	const GREEN = vplayer.GREEN
	const HLEFT = vplayer.HLEFT
	const ITALIC = vplayer.ITALIC
	const MB_LEFT = vplayer.MB_LEFT
	const MB_RIGHT = vplayer.MB_RIGHT
	const RED = vplayer.RED
	const ROUND_END = vplayer.ROUND_END
	const ROUND_JOIN = vplayer.ROUND_JOIN
	const ROUND_START = vplayer.ROUND_START
	const SMALLCAPS = vplayer.SMALLCAPS
	const SOLID = vplayer.SOLID
	const STRIKETHROUGH = vplayer.STRIKETHROUGH
	const VTOP = vplayer.VTOP
	const WHITE = vplayer.WHITE
	const YELLOW = vplayer.YELLOW

	var $g = vplayer.$g
	var addWaitToEventQ = vplayer.addWaitToEventQ
	var checkPoint = vplayer.checkPoint
	var debug = vplayer.debug
	var Font = vplayer.Font
	var fork = vplayer.fork
	var getArg = vplayer.getArg
	var getArgAsNum = vplayer.getArgAsNum
	var getURL = vplayer.getURL
	var Group = vplayer.Group
	var Image = vplayer.Image
	var Layer = vplayer.Layer
	var Line = vplayer.Line
	var Line2 = vplayer.Line2
	var newArray = vplayer.newArray
	var Polygon = vplayer.Polygon
	var R$ = vplayer.R$
	var Rectangle = vplayer.Rectangle
	var Rectangle2 = vplayer.Rectangle2
	var reset = vplayer.reset
	var rgba = vplayer.rgba
	var round = vplayer.round
	var setArg = vplayer.setArg
	var setBgBrush = vplayer.setBgBrush
	var setTPS = vplayer.setTPS
	var setViewport = vplayer.setViewport
	var SolidBrush = vplayer.SolidBrush
	var SolidPen = vplayer.SolidPen
	var sprintf = vplayer.sprintf
	var sqrt = vplayer.sqrt
	var stop = vplayer.stop
	var terminateThread = vplayer.terminateThread
	var timeMS = vplayer.timeMS
	var Txt = vplayer.Txt
	var VObj = vplayer.VObj

	const THIN = 1
	const MEDIUM = 3
	const THICK = 5
	const DARK_BLUE = rgba(0, 0, 0.625)
	const LIGHT_BLUE = rgba(0.75, 1, 1)
	const PURPLE = rgba(0.75, 0.625, 0.75)
	const BORDEAU = rgba(0.375, 0, 0)
	const MARINE = rgba(0.375, 0.625, 0.375)
	const LIGHT_YELLOW = rgba(1, 1, 0.75)
	const ORANGE = 16753920
	const testOps = 1
	const WIDTH = 2200
	const HEIGHT = 1080
	const maxexample = 5
	const NO_STALL = 0
	const DATA_STALL = 1
	const CTRL_STALL = 2
	const MUL_STALL = 3
	const PIPELINING_ENABLED = 0
	const PIPELINING_DISABLED = 1
	const BRANCH_PREDICTION = 0
	const BRANCH_INTERLOCK = 1
	const DELAYED_BRANCHES = 2
	const LOAD_INTERLOCK = 0
	const NO_LOAD_INTERLOCK = 1
	const ALU_FORWARDING = 0
	const ALU_INTERLOCK = 1
	const NO_ALU_INTERLOCK = 2
	const FORWARDING_TO_SMDR = 0
	const STORE_INTERLOCK = 1
	const NO_STORE_INTERLOCK = 2
	const ZERO_FORWARDING = 0
	const ZERO_INTERLOCK = 1
	const NO_ZERO_INTERLOCK = 2
	const MAX_COND = 18
	const def = 0
	const EQ = 1
	const NE = 2
	const HS = 3
	const CS = 4
	const LO = 5
	const CC = 6
	const MI = 7
	const PL = 8
	const VS = 9
	const VC = 10
	const HI = 11
	const LS = 12
	const GE = 13
	const LT = 14
	const GT = 15
	const LE = 16
	const AL = 17
	const NV = 18
	const MAX_INSTR = 46
	const NOP = 0
	const ADD = 1
	const ADC = 2
	const SUB = 3
	const SBC = 4
	const RSB = 5
	const RSC = 6
	const MUL = 7
	const AND = 8
	const ORR = 9
	const EOR = 10
	const BIC = 11
	const LSL = 12
	const LSR = 13
	const ASR = 14
	const ROR = 15
	const ADDi = 16
	const ADCi = 17
	const SUBi = 18
	const SBCi = 19
	const RSBi = 20
	const RSCi = 21
	const ANDi = 22
	const ORRi = 23
	const EORi = 24
	const BICi = 25
	const LSLi = 26
	const LSRi = 27
	const ASRi = 28
	const RORi = 29
	const CMN = 30
	const CMP = 31
	const TEQ = 32
	const TST = 33
	const CMNi = 34
	const CMPi = 35
	const TEQi = 36
	const TSTi = 37
	const MOV = 38
	const MVN = 39
	const LDR = 40
	const STR = 41
	const MOVi = 42
	const MVNi = 43
	const B = 44
	const BL = 45
	const HALT = 46
	const STALL = 47
	const EMPTY = 48
	const OP_TYPE_UNUSED = 0
	const OP_TYPE_REG = 1
	const OP_TYPE_IMM = 2
	const HORIZONTAL = 0
	const VERTICAL = 1
	const LEFT = 0
	const RIGHT = 1
	const TOP = 2
	const BOTTOM = 3
	const BUTTON_PE = 0
	const BUTTON_BP = 1
	const BUTTON_LI = 2
	const BUTTON_AF = 3
	const BUTTON_SF = 4
	const BUTTON_ZF = 5
	const BUTTON_SP = 6
	const LOGOW = 44
	const LOGOH = 44

	var $thread = 0
	var $pc = 0
	var $fp = -1
	var $sp = -1
	var $acc = 0
	var $obj = 0
	var $stack = 0

	function callf(pc, obj) {
		if (obj === undefined)
			obj = 0
		let l = arguments.length - 1
		for (let i = l; i >= 2; i--)
			$stack[++$sp] = arguments[i]
		$acc = obj
		$stack[++$sp] = $pc + 1
		$pc = pc
		return $acc
	}

	function enterf(n) {	// n = # local variables
		$stack[++$sp] = $obj
		$stack[++$sp] = $fp
		$fp = $sp
		$obj = $acc
		$sp += n
	}

	function returnf(n) {	// n = # parameters to pop
		$sp = $fp
		$fp = $stack[$sp--]
		$obj = $stack[$sp--]
		$pc = $stack[$sp--]
		if ($pc == -1) {
			terminateThread($thread)
			$thread = 0
			return
		}
		$sp -= n
	}

	function suspendThread() {
		if ($thread == 0)
			return 0;
		$thread.pc = $pc
		$thread.fp = $fp
		$thread.sp = $sp
		$thread.acc = $acc
		$thread.obj = $obj
		return $thread
	}

	function waitTracker() {
		$pc++
		return $thread
	}

	function resumeThread(toThread) {
		$pc = toThread.pc
		$fp = toThread.fp
		$sp = toThread.sp
		$acc = toThread.acc
		$obj = toThread.obj
		$stack = toThread.stack
		$thread = toThread
	}

	function switchToThread(toThread) {
		if ($thread == toThread)
			return
		suspendThread()
		resumeThread(toThread)
	}

	function wait(ticks, pc) {
		$pc = (pc === undefined) ? $pc + 1 : pc
		suspendThread()
		addWaitToEventQ(ticks, $thread)
		return 1
	}

	function instrIsNop(instr) {
		return (instr==NOP || instr==STALL || instr==EMPTY || instr==HALT) ? 1 : 0
	}

	function instrIsArRR(instr) {
		return (instr>=ADD && instr<=ROR) ? 1 : 0
	}

	function instrIsArRI(instr) {
		return ((instr>=ADDi) && (instr<=RORi)) ? 1 : 0
		return 0
	}

	function instrIsBranch(instr) {
		return (instr==B || instr==BL) ? 1 : 0
	}

	function instrIsLoadOrStore(instr) {
		return ((instr==LDR) || (instr==STR)) ? 1 : 0
	}

	function instrIsShI(instr) {
		return (instr>=LSLi && instr<=RORi) ? 1 : 0
	}

	function instrHasNoDstRR(instr) {
		return ((instr>=CMN && instr<=TST) || instrIsBranch(instr)) ? 1 : 0
	}

	function instrHasNoDstRI(instr) {
		return ((instr>=CMNi && instr<=TSTi) || instrIsBranch(instr)) ? 1 : 0
	}

	function instrHasNoOp2RR(instr) {
		return (instr>=MOV && instr<=STR) ? 1 : 0
	}

	function instrHasNoOp2RI(instr) {
		return (instr>=MOVi && instr<=MVNi) ? 1 : 0
	}

	function instrOpTypeRdt(instr) {
		if (instrIsNop(instr) || instrHasNoDstRR(instr) || instrHasNoDstRI(instr))
		return OP_TYPE_UNUSED
		else 
		return OP_TYPE_REG
	}

	function instrOpTypeRs1(instr) {
		if (instrIsNop(instr))
		return OP_TYPE_UNUSED
		else 
		if (instr==B || instr==BL || instrHasNoOp2RI(instr))
		return OP_TYPE_IMM
		else 
		return OP_TYPE_REG
	}

	function instrOpTypeRs2(instr) {
		if (instrIsNop(instr) || instrIsBranch(instr) || instrHasNoOp2RR(instr) || instrHasNoOp2RI(instr))
		return OP_TYPE_UNUSED
		else 
		if (instrIsArRR(instr) || instrHasNoDstRR(instr))
		return OP_TYPE_REG
		else 
		return OP_TYPE_IMM
	}

	function instrOpTypeRs3(instr2) {
		if (instrIsNop(instr2))
		return OP_TYPE_UNUSED
		else 
		if (instrIsShI(instr2))
		return OP_TYPE_IMM
		else 
		return OP_TYPE_REG
	}

	function instrText(instr, s, cond, rdt, rs1, rs2, instr2, rs3) {
		if (instrIsNop(instr))
		return sprintf("%s", $g[36][instr])
		else 
		if (instrIsArRR(instr))
		return sprintf("%s%s%s R%d,R%d,R%d", $g[36][instr], s, $g[35][cond], rdt, rs1, rs2)
		else 
		if (instrIsArRI(instr))
		return sprintf("%s%s%s R%d,R%d,%02X", $g[36][instr], s, $g[35][cond], rdt, rs1, rs2)
		else 
		if (instr==LDR || instr==STR)
		return sprintf("%s%s R%d,[R%d]", $g[36][instr], $g[35][cond], rdt, rs1)
		else 
		if (instr==MOV || instr==MVN)
		return sprintf("%s%s%s R%d,R%d", $g[36][instr], s, $g[35][cond], rdt, rs1)
		else 
		if (instr==MOVi || instr==MVNi)
		return sprintf("%s%s%s R%d,%02X", $g[36][instr], s, $g[35][cond], rdt, rs1)
		else 
		if (instrIsBranch(instr))
		return sprintf("%s%s %02X", $g[36][instr], $g[35][cond], rs1, rs2)
		return "EMPTY"
	}

	function se8(t) {
		if (t&128)
		return (-1^255|t)
		else 
		return t
	}

	function isN(val) {
		if (val&128)
		return 1
		else 
		return 0
	}

	function isZ(val) {
		if (val==0)
		return 1
		else 
		return 0
	}

	function isAddC(op1, op2) {
		if ((op1+op2)&256)
		return 1
		else 
		return 0
	}

	function isSubC(op1, op2) {
		if ((op1+op2)&256)
		return 0
		else 
		return 1
	}

	function isAddV(op1, op2, res) {
		if (((op1&128)==(op2&128)) && ((res&128)!=(op1&128))) {
			return 1
		} else {
			return 0
		}
	}

	function isSubV(op1, op2, res) {
		if (((op1&128)!=(op2&128)) && ((res&128)!=(op1&128)))
		return 1
		else 
		return 0
	}

	function setFlags(res, op1, op2, add) {
		$g[101].setNValue(isN(res&255))
		$g[101].setZValue(isZ(res&255))
		if (add) {
			$g[101].setCValue(isAddC(se8(op1), se8(op2)))
			$g[101].setVValue(isAddV(se8(op1), se8(op2), (res&255)))
		} else {
			$g[101].setCValue(isSubC(se8(op1), se8(op2)))
			$g[101].setVValue(isSubV(se8(op1), se8(op2), (res&255)))
		}
	}

	function testCondition(cond) {
		if (cond==def || cond==AL) {
			return 1
		} else
		if (cond==EQ) {
			return ($g[101].z)
		} else
		if (cond==NE) {
			return (!$g[101].z)
		} else
		if (cond==HS) {
			return ($g[101].c)
		} else
		if (cond==CS) {
			return ($g[101].c)
		} else
		if (cond==LO) {
			return (!$g[101].c)
		} else
		if (cond==CC) {
			return (!$g[101].c)
		} else
		if (cond==MI) {
			return ($g[101].n)
		} else
		if (cond==PL) {
			return (!$g[101].n)
		} else
		if (cond==VS) {
			return ($g[101].v)
		} else
		if (cond==VC) {
			return (!$g[101].v)
		} else
		if (cond==HI) {
			return ($g[101].c && !$g[101].z)
		} else
		if (cond==LS) {
			return (!$g[101].c || $g[101].z)
		} else
		if (cond==GE) {
			return (($g[101].n && $g[101].v) || (!$g[101].n && !$g[101].v))
		} else
		if (cond==LT) {
			return (($g[101].n && !$g[101].v) || (!$g[101].n && $g[101].v))
		} else
		if (cond==GT) {
			return (!$g[101].z && (($g[101].n && $g[101].v) || (!$g[101].n && !$g[101].v)))
		} else
		if (cond==LE) {
			return ($g[101].z || ($g[101].n && !$g[101].v) || (!$g[101].n && $g[101].v))
		} else
		if (cond==NV) {
			return 0
		}
	}

	function instrExecute(instr, s, cond, op1, op2, shiftIns, op3, n, z, c, v) {
		debug("Op2 before: %d", op2)
		if (shiftIns==LSL || shiftIns==LSLi) {
			op2=(op2<<op3)&255
		} else
		if (shiftIns==LSR || shiftIns==LSRi) {
			op2=(op2>>op3)&255
		} else
		if (shiftIns==ASR || shiftIns==ASRi) {
			let sign = op2&128
			op2=(op2>>op3)&255
			if (sign) {
				op2=(op2|(255<<(8-op3)))&255
			}
		} else
		if (shiftIns==ROR || shiftIns==RORi) {
			op3=op3%8
			op2=((op2>>op3)|(op2<<(8-op3)))&255
		}
		debug("Op2 after: %d", op2)
		let res = 0
		let add = 0
		if (instr==ADD || instr==ADDi) {
			res=(se8(op1)+se8(op2))&255
			add=1
		} else
		if (instr==SUB || instr==SUBi) {
			res=(se8(op1)-se8(op2))&255
		} else
		if (instr==AND || instr==ANDi) {
			res=op1&op2
		} else
		if (instr==ORR || instr==ORRi) {
			res=op1|op2
		} else
		if (instr==EOR || instr==EORi) {
			res=op1^op2
		} else
		if (instr==LSL || instr==LSLi) {
			res=(op1<<op2)&255
		} else
		if (instr==LSR || instr==LSRi) {
			res=(op1>>op2)&255
		} else
		if (instr==LDR || instr==STR) {
			res=(se8(op1)+se8(op2))&255
			add=1
		} else
		if (instr==ADC || instr==ADCi) {
			res=(se8(op1)+se8(op2)+c)&255
			add=1
		} else
		if (instr==BIC || instr==BICi) {
			res=(op1&(~op2))
		} else
		if (instr==CMN || instr==CMNi) {
			res=se8(op1)+se8(op2)
			add=1
			setFlags(res, op1, op2, add)
		} else
		if (instr==CMP || instr==CMPi) {
			res=se8(op1)-se8(op2)
			setFlags(res, op1, op2, add)
		} else
		if (instr==MOV || instr==MOVi) {
			res=((op1)&255)
		} else
		if (instr==MUL) {
			res=((op1*op2)&255)
		} else
		if (instr==MVN || instr==MVNi) {
			res=((~op1)&255)
		} else
		if (instr==RSB || instr==RSBi) {
			res=(se8(op2)-se8(op1))&255
		} else
		if (instr==RSC || instr==RSCi) {
			res=(se8(op2)-se8(op1)-1+c)&255
		} else
		if (instr==SBC || instr==SBCi) {
			res=(se8(op1)-se8(op2)-1+c)&255
		} else
		if (instr==ASR || instr==ASRi) {
			let neg = op1>>7
			if (op2>8)
			op2=8
			if (neg) {
				op1=op1^65280
			}
			res=(op1>>op2)&255
		} else
		if (instr==ROR || instr==RORi) {
			op2=op2%8
			let newLeftPart = (op1<<(8-op2))&255
			let newRightPart = (op1>>op2)&255
			res=newLeftPart+newRightPart
		} else
		if (instr==TEQ || instr==TEQi) {
			res=se8(op1)^se8(op2)
			setFlags(res, op1, op2, add)
		} else
		if (instr==TST || instr==TSTi) {
			res=se8(op1)&se8(op2)
			setFlags(res, op1, op2, add)
		} else
		if (instr==B || instr==BL) {
			res=op2&255
		} else {
			res=238
		}
		if (s=="S") {
			setFlags(res, op1, op2, add)
		}
		return res
	}

	function Instruction(_x, _y, _w, _h, _addr) {
		VObj.call(this)
		this.x = _x
		this.y = _y
		this.w = _w
		this.h = _h
		this.addr = _addr
		this.vSBit = " "
		this.vIns = 0, this.vIns2 = 0, this.vCond = 0, this.vRdt = 0, this.vRs1 = 0, this.vRs2 = 0, this.vRs3 = 0
		this.opTypeRdt = 0, this.opTypeRs1 = 0, this.opTypeRs2 = 0, this.opTypeRs3 = 0
		this.clk
		this.fw = this.w/11
		this.insPen = new SolidPen(0, 0, BLACK)
		this.sBitPen = new SolidPen(0, 0, BLACK)
		this.condPen = new SolidPen(0, 0, BLACK)
		this.rdtPen = new SolidPen(0, 0, BLACK)
		this.rs1Pen = new SolidPen(0, 0, BLACK)
		this.rs2Pen = new SolidPen(0, 0, BLACK)
		this.ins2Pen = new SolidPen(0, 0, BLACK)
		this.rs3Pen = new SolidPen(0, 0, BLACK)
		this.brush = new SolidBrush(WHITE)
		this.adr = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x, this.y, this.fw, this.h, 0, $g[15], "%02X", this.addr)
		this.ins = new Rectangle2($g[0], $g[17], HLEFT, 0, this.brush, this.x+this.fw, this.y, 2*this.fw, this.h, this.insPen, $g[15], " NOP")
		this.sBit = new Rectangle2($g[0], $g[17], HLEFT, 0, this.brush, this.x+3*this.fw, this.y, 0.5*this.fw, this.h, this.sBitPen, $g[15], "S")
		this.cond = new Rectangle2($g[0], $g[17], HLEFT, 0, this.brush, this.x+3.5*this.fw, this.y, this.fw, this.h, this.condPen, $g[15], "AL")
		this.rdt = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+5*this.fw, this.y, this.fw, this.h, this.rdtPen, $g[15], "-")
		this.rs1 = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+6*this.fw, this.y, this.fw, this.h, this.rs1Pen, $g[15], "-")
		this.rs2 = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+7*this.fw, this.y, this.fw, this.h, this.rs2Pen, $g[15], "-")
		this.ins2 = new Rectangle2($g[0], $g[17], HLEFT, 0, this.brush, this.x+8*this.fw, this.y, 2*this.fw, this.h, this.ins2Pen, $g[15], " NOP")
		this.rs3 = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+10*this.fw, this.y, this.fw, this.h, this.rs2Pen, $g[15], "-")
		this.dot = new Rectangle2($g[0], $g[17], 0, 0, $g[11], this.x+this.fw*0.80000000000000004, this.y+2, this.h/2, this.h/2)
		this.dot.setOpacity(0)
		this.arrowDown = new Line($g[0], $g[17], 0, $g[40], 0, 0, this.x+this.w+2, this.y+this.h*0.5, 5, 0, 0, 0, 0, 0)
		this.arrowUp = new Line($g[0], $g[17], 0, $g[40], 0, 0, this.x-2, this.y+this.h*0.5, -5, 0, 0, 0, 0, 0)
		this.arrowDown.setOpacity(0)
		this.arrowUp.setOpacity(0)
		this.adr.addEventHandler("eventEE", this, this.$eh0)
		this.ins.addEventHandler("eventEE", this, this.$eh1)
		this.sBit.addEventHandler("eventEE", this, this.$eh2)
		this.cond.addEventHandler("eventEE", this, this.$eh3)
		this.ins2.addEventHandler("eventEE", this, this.$eh4)
		this.rdt.addEventHandler("eventEE", this, this.$eh5)
		this.rs1.addEventHandler("eventEE", this, this.$eh6)
		this.rs2.addEventHandler("eventEE", this, this.$eh7)
		this.rs3.addEventHandler("eventEE", this, this.$eh8)
		this.ins.addEventHandler("eventMB", this, this.$eh9)
		this.sBit.addEventHandler("eventMB", this, this.$eh10)
		this.cond.addEventHandler("eventMB", this, this.$eh11)
		this.ins2.addEventHandler("eventMB", this, this.$eh12)
		this.rdt.addEventHandler("eventMB", this, this.$eh13)
		this.rs1.addEventHandler("eventMB", this, this.$eh14)
		this.rs2.addEventHandler("eventMB", this, this.$eh15)
		this.rs3.addEventHandler("eventMB", this, this.$eh16)
	}
	Instruction.prototype = Object.create(VObj.prototype)

	Instruction.prototype.$eh0 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		return 0
	}

	Instruction.prototype.$eh1 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		this.insPen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh2 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		this.sBitPen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh3 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		this.condPen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh4 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		this.ins2Pen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh5 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRdt!=OP_TYPE_UNUSED) {
			this.rdtPen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rdtPen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh6 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs1!=OP_TYPE_UNUSED) {
			this.rs1Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs1Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh7 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs2!=OP_TYPE_UNUSED) {
			this.rs2Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs2Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh8 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs3!=OP_TYPE_UNUSED) {
			this.rs3Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs3Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.getOpcode = function() {
		return this.vIns<<24|this.vRdt<<16|this.vRs1<<8|this.vRs2
	}

	Instruction.prototype.initRegs = function(remember) {
		let offset
		this.ins.setTxt("%c%s", 32, $g[36][this.vIns])
		this.ins2.setTxt("%c%s", 32, $g[36][this.vIns2])
		this.sBit.setTxt("%c%s", 32, this.vSBit)
		this.cond.setTxt("%c%s", 32, $g[35][this.vCond])
		this.opTypeRdt=instrOpTypeRdt(this.vIns)
		this.opTypeRs1=instrOpTypeRs1(this.vIns)
		this.opTypeRs2=instrOpTypeRs2(this.vIns)
		this.opTypeRs3=instrOpTypeRs3(this.vIns2)
		if (this.opTypeRs1==OP_TYPE_REG)
		this.vRs1=(this.vRs1%16)
		if (this.opTypeRs2==OP_TYPE_REG)
		this.vRs2=(this.vRs2%16)
		if (this.opTypeRs3==OP_TYPE_REG)
		this.vRs3=(this.vRs3%16)
		if (this.opTypeRdt==OP_TYPE_UNUSED)
		this.rdt.setTxt("-")
		else 
		this.rdt.setTxt("R%d", this.vRdt)
		if (this.opTypeRs1==OP_TYPE_UNUSED) {
			this.rs1.setTxt("-")
		} else
		if (this.opTypeRs1==OP_TYPE_IMM) {
			if (this.vIns==LDR || this.vIns==STR) {
				this.rs1.setTxt("[%02X]", this.vRs1)
			} else {
				this.rs1.setTxt("%02X", this.vRs1)
			}
		} else {
			if (this.vIns==LDR || this.vIns==STR) {
				this.rs1.setTxt("[R%d]", this.vRs1)
			} else {
				this.rs1.setTxt("R%d", this.vRs1)
			}
		}
		if (this.opTypeRs2==OP_TYPE_UNUSED)
		this.rs2.setTxt("-")
		else 
		if (this.opTypeRs2==OP_TYPE_REG) {
			this.rs2.setTxt("R%d", this.vRs2)
		} else {
			this.rs2.setTxt("%02X", this.vRs2)
		}
		if (this.opTypeRs3==OP_TYPE_UNUSED)
		this.rs3.setTxt("-")
		else 
		if (this.opTypeRs3==OP_TYPE_REG)
		this.rs3.setTxt("R%d", this.vRs3)
		else 
		this.rs3.setTxt("%02X", this.vRs3)
		if (instrIsBranch(this.vIns)) {
			if (this.vRs2&128) {
				offset=(se8(this.vRs2)/4)*this.h+this.h/2
				this.arrowUp.setPt(2, this.x-7, this.y+offset)
				this.arrowUp.setPt(3, this.x-2, this.y+offset)
				this.arrowUp.setOpacity(1)
				this.arrowDown.setOpacity(0)
			} else {
				offset=(this.vRs2/4)*this.h+this.h/2
				this.arrowDown.setPt(2, this.x+this.w+7, this.y+offset)
				this.arrowDown.setPt(3, this.x+this.w+2, this.y+offset)
				this.arrowDown.setOpacity(1)
				this.arrowUp.setOpacity(0)
			}
		} else {
			this.arrowUp.setOpacity(0)
			this.arrowDown.setOpacity(0)
		}
		if (remember) {
			let s = sprintf("i%d", this.addr/4)
			setArg(s, this.getOpcode().toString())
			$g[14]=0
			setArg("example", $g[14].toString())
		}
	}

	Instruction.prototype.setValue = function(instr, rdt, rs1, rd2imm) {
		this.vIns=instr
		this.vRdt=rdt
		this.vRs1=rs1
		this.vRs2=rd2imm&255
		this.initRegs(0)
	}

	Instruction.prototype.setOpcode = function(opcode) {
		this.vIns=(opcode&4278190080)>>24
		this.vRdt=(opcode&16711680)>>16
		this.vRs1=(opcode&65280)>>8
		this.vRs2=(opcode&255)
		this.initRegs(0)
	}

	Instruction.prototype.$eh9 = function(down, flags, x, y) {
		if (!$g[22]) {
			if (down) {
				this.clk=timeMS()
				if (flags&MB_LEFT) {
					this.vIns=(this.vIns==MAX_INSTR) ? 0 : this.vIns+1
				} else
				if (flags&MB_RIGHT) {
					this.vIns=(this.vIns==0) ? MAX_INSTR : this.vIns-1
				}
			} else {
				this.clk=this.clk+500
				if (timeMS()>this.clk)
				this.vIns=0
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh10 = function(down, flags, x, y) {
		if (!$g[22]) {
			if (down) {
				this.clk=timeMS()
				if (flags&MB_LEFT) {
					this.vSBit=(this.vSBit==" ") ? "S" : " "
				} else
				if (flags&MB_RIGHT) {
					this.vSBit=(this.vSBit==" ") ? "S" : " "
				}
			} else {
				this.clk=this.clk+500
				if (timeMS()>this.clk)
				this.vSBit=0
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh11 = function(down, flags, x, y) {
		if (!$g[22]) {
			if (down) {
				this.clk=timeMS()
				if (flags&MB_LEFT) {
					this.vCond=(this.vCond==MAX_COND) ? 0 : this.vCond+1
				} else
				if (flags&MB_RIGHT) {
					this.vCond=(this.vCond==0) ? MAX_COND : this.vCond-1
				}
			} else {
				this.clk=this.clk+500
				if (timeMS()>this.clk)
				this.vCond=0
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh12 = function(down, flags, x, y) {
		if (!$g[22]) {
			if (down) {
				this.clk=timeMS()
				if (flags&MB_LEFT) {
					if (this.vIns2==0) {
						this.vIns2=LSL
					} else
					if (this.vIns2==RORi) {
						this.vIns2=0
					} else
					if (this.vIns2==ROR) {
						this.vIns2=LSLi
					} else {
						this.vIns2=this.vIns2+1
					}
				} else
				if (flags&MB_RIGHT) {
					if (this.vIns2==0) {
						this.vIns2=RORi
					} else
					if (this.vIns2==LSL) {
						this.vIns2=0
					} else
					if (this.vIns2==LSLi) {
						this.vIns2=ROR
					} else {
						this.vIns2=this.vIns2-1
					}
				}
			} else {
				this.clk=this.clk+500
				if (timeMS()>this.clk)
				this.vIns2=0
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh13 = function(down, flags, x, y) {
		if (!$g[22] && down && this.opTypeRdt!=OP_TYPE_UNUSED) {
			if (flags&MB_LEFT) {
				this.vRdt=(this.vRdt==15) ? 0 : this.vRdt+1
			} else
			if (flags&MB_RIGHT)
			this.vRdt=(this.vRdt==0) ? 15 : this.vRdt-1
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh14 = function(down, flags, x, y) {
		if (!$g[22] && down) {
			if (flags&MB_LEFT) {
				if (this.opTypeRs1==OP_TYPE_REG) {
					this.vRs1=(this.vRs1+1)%16
				} else
				if (this.opTypeRs1==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs1=(this.vRs1+1)%256
				}
			} else
			if (flags&MB_RIGHT) {
				if (this.opTypeRs1==OP_TYPE_REG) {
					this.vRs1=(this.vRs1-1)%16
					if (this.vRs1<0)
					this.vRs1=16+this.vRs1
				} else
				if (this.opTypeRs1==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs1=(this.vRs1-1)%256
					if (this.vRs1<0)
					this.vRs1=256+this.vRs1
				}
			} else {
				if (this.opTypeRs1==OP_TYPE_IMM) {
					this.clk=this.clk+500
					if (timeMS()>this.clk)
					this.vRs1=0
				}
			}
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh15 = function(down, flags, x, y) {
		if (!$g[22] && down) {
			if (flags&MB_LEFT) {
				if (this.opTypeRs2==OP_TYPE_REG) {
					this.vRs2=(this.vRs2+1)%16
				} else
				if (this.opTypeRs2==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs2=(this.vRs2+1)%256
				}
			} else
			if (flags&MB_RIGHT) {
				if (this.opTypeRs2==OP_TYPE_REG) {
					this.vRs2=(this.vRs2-1)%16
					if (this.vRs2<0)
					this.vRs2=16+this.vRs2
				} else
				if (this.opTypeRs2==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs2=(this.vRs2-1)%256
					if (this.vRs2<0)
					this.vRs2=256+this.vRs2
				}
			} else {
				if (this.opTypeRs2==OP_TYPE_IMM) {
					this.clk=this.clk+500
					if (timeMS()>this.clk)
					this.vRs2=0
				}
			}
			this.initRegs(1)
		}
	}

	Instruction.prototype.$eh16 = function(down, flags, x, y) {
		if (!$g[22] && down) {
			if (flags&MB_LEFT) {
				if (this.opTypeRs3==OP_TYPE_REG) {
					this.vRs3=(this.vRs3+1)%16
				} else
				if (this.opTypeRs3==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs3=(this.vRs3+1)%256
				}
			} else
			if (flags&MB_RIGHT) {
				if (this.opTypeRs3==OP_TYPE_REG) {
					this.vRs3=(this.vRs3-1)%16
					if (this.vRs3<0)
					this.vRs3=16+this.vRs3
				} else
				if (this.opTypeRs3==OP_TYPE_IMM) {
					this.clk=timeMS()
					this.vRs3=(this.vRs3-1)%256
					if (this.vRs3<0)
					this.vRs3=256+this.vRs3
				}
			} else {
				if (this.opTypeRs3==OP_TYPE_IMM) {
					this.clk=this.clk+500
					if (timeMS()>this.clk)
					this.vRs3=0
				}
			}
			this.initRegs(1)
		}
	}

	function InstructionMemory(x, y, w, h) {
		VObj.call(this)
		this.headingsPen = new SolidPen(0, 0, RED)
		this.headingsFont = new Font("Calibri", 18)
		this.addrLabel = new Rectangle2($g[0], 0, 0, 0, 0, x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Addr")
		this.instrLabel = new Rectangle2($g[0], 0, 0, 0, 0, 47+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Instr")
		this.sBitLabel = new Rectangle2($g[0], 0, 0, 0, 0, 99+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "S")
		this.condLabel = new Rectangle2($g[0], 0, 0, 0, 0, 130+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Cond")
		this.rdLabel = new Rectangle2($g[0], 0, 0, 0, 0, 175+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Rd")
		this.op1Label = new Rectangle2($g[0], 0, 0, 0, 0, 210+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Op1")
		this.op2Label = new Rectangle2($g[0], 0, 0, 0, 0, 250+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Op2")
		this.offsetLabel = new Rectangle2($g[0], 0, 0, 0, 0, 300+x+13, y, 10, 4, this.headingsPen, this.headingsFont, "Offset")
		this.ih = (h-12-4)/32
		this.instruction = newArray(32)
		this.active = 31
		this.r = new Rectangle2($g[0], 0, 0, $g[1], $g[37], x, y+12, w, h-12)
		this.r.setRounded(2, 2)
		new Rectangle2($g[0], 0, 0, $g[1], $g[38], x+2, y+12+2, w-4, h-12-4)
		for (this.lp1 = 0; this.lp1<32; this.lp1++)
		this.instruction[this.lp1]=new Instruction(x+2, y+12+2+this.lp1*this.ih, w-4, this.ih, this.lp1*4)
	}
	InstructionMemory.prototype = Object.create(VObj.prototype)

	InstructionMemory.prototype.setValue = function(addr, instr, rdt, rs1, rs2imm) {
		this.instruction[addr/4].setValue(instr, rdt, rs1, rs2imm)
	}

	InstructionMemory.prototype.getOpcode = function(addr) {
		return this.instruction[addr/4].getOpcode()
	}

	InstructionMemory.prototype.setOpcode = function(addr, opcode) {
		this.instruction[addr/4].setOpcode(opcode)
	}

	InstructionMemory.prototype.setActive = function(addr) {
		this.instruction[this.active].dot.setOpacity(0)
		this.active=addr/4
		this.instruction[this.active].dot.setOpacity(1)
	}

	function InstructionRegister(x, y, w, h, caption) {
		VObj.call(this)
		this.vSBit = " "
		this.vIns = EMPTY, this.vCond = 0, this.vRdt = 0, this.vRs1 = 0, this.vRs2 = 0, this.vIns2 = EMPTY, this.vRs3 = 0
		this.nSBit = " "
		this.nIns = EMPTY, this.nCond = 0, this.nRdt = 0, this.nRs1 = 0, this.nRs2 = 0, this.nIns2 = EMPTY, this.nRs3 = 0
		this.IMFont = new Font("Calibri", 21)
		this.txt = "EMPTY"
		this.r1 = new Rectangle2($g[0], 0, 0, $g[1], $g[5], x, y, w, h)
		this.r1.setRounded(2, 2)
		this.r2 = new Rectangle2($g[0], 0, 0, $g[1], $g[12], x+5, y+4, w-11, h-31)
		this.r2.setRounded(2, 2)
		this.r3 = new Rectangle2($g[0], 0, 0, 0, 0, x, y+h-22, w, 22, $g[4], $g[15], caption)
		this.label = new Txt($g[0], $g[17], 0, x+w/2, y+(h-31)/2, 0, this.IMFont, this.txt)
		this.label.rotate(-90)
	}
	InstructionRegister.prototype = Object.create(VObj.prototype)

	InstructionRegister.prototype.setNewValue = function(instr, sBit, cond, rdt, rs1, rs2, instr2, rs3) {
		this.nIns=instr
		this.nSBit=sBit
		this.nCond=cond
		this.nRdt=rdt
		this.nRs1=rs1
		this.nRs2=rs2
		this.nIns2=instr2
		this.nRs3=rs3
	}

	InstructionRegister.prototype.setNewInstruction = function(i) {
		this.nIns=i.vIns
		this.nSBit=i.vSBit
		this.nCond=i.vCond
		this.nRdt=i.vRdt
		this.nRs1=i.vRs1
		this.nRs2=i.vRs2
		this.nIns2=i.vIns2
		this.nRs3=i.vRs3
	}

	InstructionRegister.prototype.getNewInstrTxt = function() {
		return instrText(this.nIns, this.nSBit, this.nCond, this.nRdt, this.nRs1, this.nRs2, this.nIns2, this.nRs3)
	}

	InstructionRegister.prototype.setOpacity = function(opacity) {
		this.r1.setOpacity(opacity)
		this.r2.setOpacity(opacity)
		this.r3.setOpacity(opacity)
		this.label.setOpacity(opacity)
	}

	InstructionRegister.prototype.reset = function() {
		this.vIns=EMPTY
		this.vIns2=EMPTY
		this.vSBit=" "
		this.vRdt=this.vCond=this.vRs1=this.vRs2=this.vRs3=0
		this.nIns=EMPTY
		this.nIns2=EMPTY
		this.nSBit=" "
		this.nRdt=this.nRs1=this.nRs2=this.nRs3=0
		this.txt=instrText(this.vIns, this.vSBit, this.vCond, this.vRdt, this.vRs1, this.vRs2, this.nIns2, this.nRs3)
		this.label.setTxt(this.txt)
	}

	function Register(x, y, w, h, labelPos, caption) {
		VObj.call(this)
		this.vx, this.vy, this.vw, this.vh
		this.value = 0, this.newValue = 0
		this.tag = 0, this.newTag = 0
		this.useTag = 0, this.invalid = 0
		this.fixed = 0
		this.label
		this.r1 = new Rectangle2($g[0], 0, 0, $g[1], $g[41], x, y, w, h)
		this.r1.setRounded(2, 2)
		this.bg1 = new Rectangle2($g[0], $g[17], 0, 0, $g[12], this.vx, this.vy, this.vw/2, this.vh)
		this.bg2 = new Rectangle2($g[0], $g[17], 0, 0, $g[12], this.vx+this.vw/2, this.vy, this.vw/2, this.vh)
		if (w>=h) {
			this.vy=y+4
			this.vw=w-38
			this.vh=h-9
			if (labelPos==LEFT) {
				this.r2 = new Rectangle($g[0], 0, 0, 0, 0, x+19-1, y+h/2, -19, -h/2, 38, h, 0, $g[15], caption)
				this.r2.rotate(-90)
				this.vx=x+32
			} else
			if (labelPos==RIGHT) {
				this.r2=new Rectangle($g[0], 0, 0, 0, 0, x+w-19, y+h/2, -19, -h/2, 38, h, 0, $g[15], caption)
				this.r2.rotate(-90)
				this.vx=x+5
			}
		} else {
			this.vx=x+5
			this.vw=w-11
			this.vh=h-31
			if (labelPos==TOP) {
				this.r2=new Rectangle2($g[0], 0, 0, 0, 0, x, y, w, 31, 0, $g[15], caption)
				this.vy=y+26
			} else
			if (labelPos==BOTTOM) {
				this.r2=new Rectangle2($g[0], 0, 0, 0, 0, x, y+h-22, w, 22, 0, $g[15], caption)
				this.vy=y+4
			}
		}
		if (w>=h) {
			this.label=new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.vx, this.vy, this.vw, this.vh, 0, $g[15], "%02X", this.value)
		} else {
			this.label=new Rectangle($g[0], $g[17], 0, 0, $g[13], this.vx+this.vw/2, this.vy+this.vh/2, -this.vw/2, -this.vh/2, this.vw, this.vh, 0, $g[15], "%02X", this.value)
		}
		this.label.setRounded(2, 2)
		this.label.addEventHandler("eventEE", this, this.$eh17)
		this.label.addEventHandler("eventMB", this, this.$eh18)
		this.hmode = 0
	}
	Register.prototype = Object.create(VObj.prototype)

	Register.prototype.setFixed = function() {
		this.fixed=1
	}

	Register.prototype.setOpacity = function(opacity) {
		this.r1.setOpacity(opacity)
		this.r2.setOpacity(opacity)
		this.bg1.setOpacity(opacity)
		this.bg2.setOpacity(opacity)
		this.label.setOpacity(opacity)
	}

	Register.prototype.updateLabel = function() {
		if (this.invalid) {
			this.label.setTxt("INV")
		} else
		if (this.useTag) {
			if (this.tag>=0)
			this.label.setTxt("R%d:%02X", this.tag, this.value)
			else 
			this.label.setTxt("--:%02X", this.value)
		} else {
			this.label.setTxt("%02X", this.value)
		}
		return 0
	}

	Register.prototype.$eh17 = function(enter, x, y) {
		if (this.fixed==0)
		this.label.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	Register.prototype.$eh18 = function(down, flags, x, y) {
		if (this.fixed==0 && down) {
			if (flags&MB_LEFT) {
				this.value=(this.value+1)&255
			} else
			if (flags&MB_RIGHT) {
				this.value=(this.value-1)&255
			}
			this.updateLabel()
		}
		return 0
	}

	Register.prototype.setValue = function(val) {
		this.value=val
		this.invalid=0
		this.updateLabel()
	}

	Register.prototype.setNewValue = function(val) {
		this.newValue=val
	}

	Register.prototype.setNewTag = function(t) {
		this.newTag=t
	}

	Register.prototype.setTag = function(t) {
		this.useTag=1
		this.tag=t
		this.updateLabel()
	}

	Register.prototype.setInvalid = function(i) {
		this.useTag=1
		this.invalid=i
	}

	Register.prototype.tagMatches = function(t) {
		return (this.invalid) ? 0 : (this.tag==t) ? 1 : 0
	}

	Register.prototype.highlight = function(brush) {
		if (this.hmode==0) {
			this.bg1.setBrush(brush)
			this.bg2.setBrush(brush)
			this.hmode=1
		} else {
			this.bg2.setBrush(brush)
		}
	}

	Register.prototype.unHighlight = function() {
		this.bg1.setBrush($g[12])
		this.bg2.setBrush($g[12])
		this.hmode=0
	}

	Register.prototype.reset = function() {
		this.value=0
		this.newValue=0
		this.tag=0
		this.newTag=0
		this.useTag=0
		this.invalid=0
		this.unHighlight()
		this.updateLabel()
	}

	function Component(_x, _y, _w, _h, caption) {
		VObj.call(this)
		this.x = _x
		this.y = _y
		this.w = _w
		this.h = _h
		this.bg = new Rectangle2($g[0], 0, 0, $g[1], $g[43], this.x, this.y, this.w, this.h)
		this.bg.setRounded(2, 2)
		this.label
		if (this.w>=this.h) {
			this.label=new Rectangle2($g[0], 0, 0, 0, 0, this.x, this.y, this.w, this.h, 0, $g[44], caption)
		} else {
			this.label=new Rectangle($g[0], 0, 0, 0, 0, this.x+this.w/2-3, this.y+this.h/2, -this.w/2, -this.h/2, this.w, this.h, 0, $g[44], caption)
			this.label.rotate(-90)
		}
	}
	Component.prototype = Object.create(VObj.prototype)

	Component.prototype.setOpacity = function(opacity) {
		this.bg.setOpacity(opacity)
		this.label.setOpacity(opacity)
	}

	function ALU(x, y, w, h) {
		VObj.call(this)
		this.alu = new Polygon($g[0], 0, ABSOLUTE, $g[1], $g[43], x, y, 0, 0, w, h/4, w, 3*h/4, 0, h, 0, 5*h/8, w/2, h/2, 0, 3*h/8)
		new Rectangle2($g[0], 0, 0, 0, 0, x, y-10, w, 10, 0, $g[44], "ALU")
		this.op = ""
		this.txtOp = new Rectangle($g[0], $g[17], 0, 0, $g[11], x, y+h/2, 0, -h/12, 2*w/3, h/6, $g[4], $g[44], this.op)
		this.txtOp.setOpacity(0)
		this.txtOp.setRounded(2, 2)
		this.txtResult = new Rectangle($g[0], $g[19], 0, $g[1], $g[13], x+3*w/4, y+h/2, 0, -h/12, w/2, h/6, $g[1], $g[44])
		this.txtResult.setOpacity(0)
		this.txtResult.setRounded(2, 2)
	}
	ALU.prototype = Object.create(VObj.prototype)

	ALU.prototype.setTxtOp = function(vIns) {
		this.op=""
		if (vIns>=ADD && vIns<=BIC) {
			this.op=$g[36][vIns]
		} else
		if (vIns>=ADDi && vIns<=RSCi) {
			this.op=$g[36][vIns-15]
		} else
		if (vIns>=ANDi && vIns<=BICi) {
			this.op=$g[36][vIns-14]
		} else
		if (vIns>=LSL && vIns<=ROR) {
		} else
		if (vIns>=LSLi && vIns<=RORi) {
		} else
		if (vIns==CMN || vIns==CMNi) {
			this.op="ADD"
		} else
		if (vIns==CMP || vIns==CMPi) {
			this.op="SUB"
		} else
		if (vIns==MVN || vIns==MVNi) {
			this.op="XOR"
		} else
		if (vIns==LDR || vIns==STR) {
			this.op="ADD"
		}
		this.txtOp.setTxt(this.op)
		this.txtOp.setOpacity(1)
	}

	function AnimPipe() {
		VObj.call(this)
		this.w = 10
		this.n = 0
		this.px = newArray(0)
		this.py = newArray(0)
		this.ls = newArray(0)
		this.ll = 0
		this.head = 1
		this.bgPen0 = new SolidPen(SOLID, this.w, GRAY192, BEVEL_JOIN|BUTT_END)
		this.bgPen1 = new SolidPen(SOLID, this.w, GRAY192, BEVEL_JOIN|ARROW60_END)
		this.fgPen0 = new SolidPen(SOLID, this.w, RED, BEVEL_JOIN|BUTT_END)
		this.fgPen1 = new SolidPen(SOLID, this.w, RED, BEVEL_JOIN|ARROW60_END)
		this.bgLine = new Line($g[0], $g[18], 0, this.bgPen1, 0, 0)
		this.fgLine = new Line($g[0], $g[19], 0, this.fgPen0, 0, 0)
	}
	AnimPipe.prototype = Object.create(VObj.prototype)

	AnimPipe.prototype.setOpacity = function(opacity) {
		this.bgLine.setOpacity(opacity)
		this.fgLine.setOpacity(opacity)
	}

	AnimPipe.prototype.setHead = function(h) {
		this.head=h ? 1 : 0
		this.bgLine.setPen(this.head ? this.bgPen1 : this.bgPen0)
		this.fgLine.setPen(this.fgPen0)
	}

	AnimPipe.prototype.addPoint = function(x, y) {
		this.px[this.n]=x
		this.py[this.n]=y
		this.bgLine.setPt(this.n, x, y)
		this.n++
	}

	AnimPipe.prototype.calcLength = function() {
		let dx, dy
		this.ll=0
		for (let i = 0; i<this.n-1; i++) {
			dx=this.px[i+1]-this.px[i]
			dy=this.py[i+1]-this.py[i]
			this.ll+=this.ls[i]=sqrt(dx*dx+dy*dy)
		}
	}

	AnimPipe.prototype.setPoint = function(n, x, y) {
		this.px[n]=x
		this.py[n]=y
		this.bgLine.setPt(n, x, y)
	}

	AnimPipe.prototype.reset = function() {
		this.fgLine.setNPts(0)
		this.fgLine.setPen(this.fgPen0)
	}

	function AnimatedClock($grp, x, y, w, h) {
		Group.call(this, $grp, 0, 0, x, y, 0, 0, w, h)
		this.cw = w
		this.chw = this.cw/2
		this.ch = h-6
		this.stall = 0, this.type = 0
		this.setClipPath(R$(0, 0, w, h))
		this.clkDisplay = new Rectangle2(this, 0, 0, $g[1], $g[12], 0, 0, w, h)
		this.clkDisplay.setRounded(2, 2)
		this.prev_clock = new Line(this, $g[19], 0, $g[45], -this.chw+this.chw/5, 3+this.ch, 0, 0, 0, -this.ch, this.chw, 0, 0, this.ch, this.chw, 0)
		this.next_clock = new Line(this, $g[19], 0, $g[46], this.chw+this.chw/5, 3+this.ch, 0, 0, 0, -this.ch, this.chw, 0, 0, this.ch, this.chw, 0)
		this.dot = new Rectangle2(this, $g[19], 0, 0, $g[5], w/2-3, h-6, 6, 6)
		this.canUpdate
	}
	AnimatedClock.prototype = Object.create(Group.prototype)

	AnimatedClock.prototype.setStall = function(s, t) {
		this.stall=s
		this.type=t
		if (this.canUpdate)
		this.prev_clock.setPen(this.stall ? (this.type ? $g[47] : $g[45]) : $g[46])
	}

	function Button(x, y, w, h, caption, ID) {
		VObj.call(this)
		this.label = new Rectangle2($g[0], 0, 0, $g[1], $g[48], x, y, w, h, $g[1], $g[15], caption)
		this.label.addEventHandler("eventEE", this, this.$eh19)
	}
	Button.prototype = Object.create(VObj.prototype)

	Button.prototype.$eh19 = function(enter, x, y) {
		this.label.setBrush(enter ? $g[49] : $g[48])
		return 0
	}

	Button.prototype.setCaption = function(caption) {
		this.label.setTxt(caption)
	}

	Button.prototype.showLocked = function(locked) {
		this.label.setFont(locked ? $g[16] : $g[15])
	}

	function CPSR(x, y, w, h, forwarding) {
		VObj.call(this)
		this.n = 0
		this.z = 0
		this.c = 0
		this.v = 0
		this.invalid = 0
		this.nx = x
		this.zx = x+w/4
		this.cx = x+2*(w/4)
		this.vx = x+3*(w/4)
		this.ny = y+h/3
		this.zy = y+h/3
		this.cy = y+h/3
		this.vy = y+h/3
		if (forwarding) {
			$g[52]=new Font("Calibri", 18)
			$g[53]=new Font("Calibri", 18)
		}
		this.outer = new Rectangle2($g[0], 0, 0, $g[1], $g[50], x, y, w+4, h)
		this.nLabel = new Rectangle($g[0], 0, 0, 0, 0, this.nx, y, 0, 0, w/4, h/3, 0, $g[52], "N")
		this.zLabel = new Rectangle($g[0], 0, 0, 0, 0, this.zx, y, 0, 0, w/4, h/3, 0, $g[52], "Z")
		this.cLabel = new Rectangle($g[0], 0, 0, 0, 0, this.cx, y, 0, 0, w/4, h/3, 0, $g[52], "C")
		this.vLabel = new Rectangle($g[0], 0, 0, 0, 0, this.vx, y, 0, 0, w/4, h/3, 0, $g[52], "V")
		this.nValue = new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.nx+4, this.ny, (w/4)-4, 2*h/3-4, 0, $g[53], "%01X", this.n)
		this.zValue = new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.zx+4, this.zy, (w/4)-4, 2*h/3-4, 0, $g[53], "%01X", this.z)
		this.cValue = new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.cx+4, this.cy, (w/4)-4, 2*h/3-4, 0, $g[53], "%01X", this.c)
		this.vValue = new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.vx+4, this.vy, (w/4)-4, 2*h/3-4, 0, $g[53], "%01X", this.v)
		this.nValue.addEventHandler("eventEE", this, this.$eh20)
		this.zValue.addEventHandler("eventEE", this, this.$eh21)
		this.cValue.addEventHandler("eventEE", this, this.$eh22)
		this.vValue.addEventHandler("eventEE", this, this.$eh23)
		this.nValue.addEventHandler("eventMB", this, this.$eh24)
		this.zValue.addEventHandler("eventMB", this, this.$eh25)
		this.cValue.addEventHandler("eventMB", this, this.$eh26)
		this.vValue.addEventHandler("eventMB", this, this.$eh27)
		this.hmode = 0
	}
	CPSR.prototype = Object.create(VObj.prototype)

	CPSR.prototype.updateNValue = function() {
		this.nValue.setTxt("%01X", this.n)
		return 0
	}

	CPSR.prototype.updateZValue = function() {
		this.zValue.setTxt("%01X", this.z)
		return 0
	}

	CPSR.prototype.updateCValue = function() {
		this.cValue.setTxt("%01X", this.c)
		return 0
	}

	CPSR.prototype.updateVValue = function() {
		this.vValue.setTxt("%01X", this.v)
		return 0
	}

	CPSR.prototype.updateValues = function() {
		this.updateNValue()
		this.updateZValue()
		this.updateCValue()
		this.updateVValue()
	}

	CPSR.prototype.$eh20 = function(enter, x, y) {
		this.nValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh21 = function(enter, x, y) {
		this.zValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh22 = function(enter, x, y) {
		this.cValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh23 = function(enter, x, y) {
		this.vValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh24 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.n=(this.n+1)%2
			}
			this.updateNValue()
		}
		return 0
	}

	CPSR.prototype.$eh25 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.z=(this.z+1)%2
			}
			this.updateZValue()
		}
		return 0
	}

	CPSR.prototype.$eh26 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.c=(this.c+1)%2
			}
			this.updateCValue()
		}
		return 0
	}

	CPSR.prototype.$eh27 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.v=(this.v+1)%2
			}
			this.updateVValue()
		}
		return 0
	}

	CPSR.prototype.setNValue = function(val) {
		this.n=val
		this.updateNValue()
	}

	CPSR.prototype.setZValue = function(val) {
		this.z=val
		this.updateZValue()
	}

	CPSR.prototype.setCValue = function(val) {
		this.c=val
		this.updateCValue()
	}

	CPSR.prototype.setVValue = function(val) {
		this.v=val
		this.updateVValue()
	}

	CPSR.prototype.setInvalid = function(val) {
		this.invalid=val
		if (this.invalid) {
			this.nValue.setTxt("X")
			this.zValue.setTxt("X")
			this.cValue.setTxt("X")
			this.vValue.setTxt("X")
		}
	}

	CPSR.prototype.setOpacity = function(opacity) {
		this.outer.setOpacity(opacity)
		this.nLabel.setOpacity(opacity)
		this.zLabel.setOpacity(opacity)
		this.cLabel.setOpacity(opacity)
		this.vLabel.setOpacity(opacity)
		this.nValue.setOpacity(opacity)
		this.zValue.setOpacity(opacity)
		this.cValue.setOpacity(opacity)
		this.vValue.setOpacity(opacity)
	}

	CPSR.prototype.highlight = function(brush) {
	}

	CPSR.prototype.unHighlight = function() {
	}

	CPSR.prototype.reset = function() {
		this.n=0
		this.z=0
		this.c=0
		this.v=0
		this.unHighlight()
		this.updateValues()
	}

	function resetWires() {
		$g[87].reset()
		$g[85].reset()
		$g[86].setOpacity(0)
		$g[88].reset()
		$g[89].reset()
		$g[90].reset()
		$g[91].reset()
		$g[92].reset()
		$g[93].reset()
		$g[94].reset()
		$g[95].reset()
		$g[96].reset()
		$g[97].reset()
		$g[112].reset()
		$g[113].reset()
		$g[114].reset()
		$g[115].reset()
		$g[116].reset()
		$g[117].reset()
		$g[118].setOpacity(0)
		$g[119].reset()
		$g[120].setOpacity(0)
		$g[121].reset()
		$g[122].setOpacity(0)
		$g[123].reset()
		$g[124].setOpacity(0)
		$g[126].reset()
		$g[125].reset()
		$g[128].reset()
		$g[129].reset()
		$g[130].setOpacity(0)
		$g[131].reset()
		$g[132].setOpacity(0)
		$g[127].setOpacity(0)
		$g[141].reset()
		$g[142].reset()
		$g[143].reset()
		$g[144].reset()
		$g[145].reset()
		$g[146].reset()
		$g[147].setOpacity(0)
		$g[148].reset()
		$g[149].reset()
		$g[150].reset()
		$g[151].reset()
		$g[152].reset()
		$g[153].reset()
		$g[154].reset()
		$g[155].reset()
		$g[139].txtOp.setOpacity(0)
		$g[139].txtResult.setOpacity(0)
		$g[161].reset()
		$g[162].reset()
		$g[163].reset()
		$g[164].reset()
		$g[165].reset()
		$g[166].reset()
		$g[169].reset()
	}

	function resetRegisters() {
		$g[78].reset()
		$g[78].setValue(124)
		$g[99].reset()
		$g[134].reset()
		$g[135].reset()
		$g[158].reset()
		$g[157].reset()
		$g[168].reset()
		$g[80][0].reset()
		$g[80][1].reset()
		$g[81][0].reset()
		$g[81][1].reset()
		$g[98].reset()
		$g[133].reset()
		$g[156].reset()
		$g[167].reset()
		$g[76].setActive(124)
		$g[157].setInvalid(1)
		$g[157].updateLabel()
		$g[168].setInvalid(1)
		$g[168].updateLabel()
		$g[80][0].setValue(-1)
		$g[80][0].setInvalid(1)
		$g[80][0].updateLabel()
		$g[80][1].setValue(-1)
		$g[80][1].setInvalid(1)
		$g[80][1].updateLabel()
		$g[33]=0
		$g[34]=0
		$g[73].setTxt("%4d", 0)
		$g[74].setTxt("%4d", 0)
	}

	function resetCircuit() {
		resetRegisters()
		resetWires()
	}

	function showBTB(opacity) {
		$g[79].setOpacity(opacity)
		$g[80][0].setOpacity(opacity)
		$g[80][1].setOpacity(opacity)
		$g[81][0].setOpacity(opacity)
		$g[81][1].setOpacity(opacity)
		$g[93].setOpacity(opacity)
		$g[112].setOpacity(opacity)
		$g[82].setOpacity(opacity)
		$g[96].setOpacity(opacity)
		$g[89].setOpacity(opacity)
		$g[123].setOpacity(opacity)
		$g[126].setOpacity(opacity)
		$g[105].setOpacity(opacity)
		$g[125].setOpacity(opacity)
	}

	function showALUForwarding(opacity) {
		if (opacity==0) {
			$g[144].setPoint(0, 1186, 452)
			$g[144].setPoint(1, 1351, 452)
			$g[145].setPoint(0, ($g[29]) ? 1186 : 1209, 551)
			$g[145].setPoint(1, 1301, 551)
			$g[146].setPoint(2, 1213, 573)
			$g[146].setPoint(3, 1301, 573)
			$g[144].setHead(0)
		} else {
			$g[144].setPoint(0, 1186, 485)
			$g[144].setPoint(1, 1301, 485)
			$g[145].setPoint(0, 1186, 529)
			$g[145].setPoint(1, 1301, 529)
			$g[146].setPoint(2, 1213, 551)
			$g[146].setPoint(3, 1301, 551)
			$g[144].setHead(1)
		}
		$g[136].setOpacity(opacity)
		$g[142].setOpacity(opacity)
		$g[143].setOpacity(opacity)
		$g[149].setOpacity(opacity)
		$g[148].setOpacity(opacity)
	}

	function showSMDRForwarding(opacity) {
		if (opacity==0) {
			$g[152].setPoint(1, 1159, 727)
			$g[152].setPoint(2, 1348, 727)
			$g[152].setHead(0)
		} else {
			$g[152].setPoint(1, 1159, 749)
			$g[152].setPoint(2, 1301, 749)
			$g[152].setHead(1)
		}
		$g[138].setOpacity(opacity)
		$g[150].setOpacity(opacity)
		$g[151].setOpacity(opacity)
	}

	function showZeroForwarding(opacity) {
	}

	function showPipeline(opacity) {
		if (opacity==0) {
			$g[95].setPoint(1, 803, 507)
			$g[95].setPoint(2, 803, 529)
			$g[114].setPoint(0, 803, 507)
			$g[115].setPoint(0, 803, 507)
			$g[97].setPoint(1, 1186, 860)
			$g[131].setPoint(1, 1051, 452)
			$g[131].setPoint(2, 1186, 452)
			$g[128].setPoint(1, 1209, 551)
			$g[152].setPoint(0, 1159, 551)
			$g[154].setPoint(3, 1630, 507)
			$g[155].setPoint(3, 1630, 507)
			$g[153].setPoint(1, 1695, 727)
			$g[163].setPoint(1, 1939, 507)
			$g[97].setHead(0)
			$g[95].setHead(0)
			$g[131].setHead(0)
			$g[144].setHead(0)
			$g[128].setHead(0)
			$g[152].setHead(0)
			$g[153].setHead(0)
			$g[154].setHead(0)
			$g[155].setHead(0)
			$g[163].setHead(0)
			showBTB(opacity)
			showALUForwarding(opacity)
			showSMDRForwarding(opacity)
			showZeroForwarding(opacity)
		} else {
			$g[95].setPoint(1, 749, 507)
			$g[95].setPoint(2, 776, 507)
			$g[114].setPoint(0, 803, 551)
			$g[115].setPoint(0, 803, 551)
			$g[97].setPoint(1, 1132, 860)
			$g[131].setPoint(1, 1051, 463)
			$g[131].setPoint(2, 1132, 463)
			$g[128].setPoint(1, 1132, 551)
			$g[152].setPoint(0, 1159, 595)
			$g[154].setPoint(3, 1630, 507)
			$g[155].setPoint(3, 1630, 507)
			$g[153].setPoint(1, 1587, 727)
			$g[163].setPoint(1, 1910, 507)
			$g[97].setHead(1)
			$g[95].setHead(1)
			$g[131].setHead(1)
			$g[144].setHead(1)
			$g[128].setHead(1)
			$g[152].setHead(1)
			$g[153].setHead(1)
			$g[154].setHead(1)
			$g[155].setHead(1)
			$g[163].setHead(1)
			showBTB($g[27]==BRANCH_PREDICTION ? 1 : 0)
			showALUForwarding($g[29]==ALU_FORWARDING ? 1 : 0)
			showSMDRForwarding($g[30]==FORWARDING_TO_SMDR ? 1 : 0)
			showZeroForwarding($g[31]==ZERO_FORWARDING ? 1 : 0)
		}
		$g[94].setOpacity(opacity)
		$g[84].setOpacity(opacity)
		$g[91].setOpacity(opacity)
		$g[99].setOpacity(opacity)
		$g[133].setOpacity(opacity)
		$g[156].setOpacity(opacity)
		$g[167].setOpacity(opacity)
		$g[141].setOpacity(opacity)
		$g[161].setOpacity(opacity)
		$g[134].setOpacity(opacity)
		$g[135].setOpacity(opacity)
		$g[157].setOpacity(opacity)
		$g[168].setOpacity(opacity)
		$g[158].setOpacity(opacity)
		$g[66].label.setOpacity(opacity)
		$g[67].label.setOpacity(opacity)
		$g[68].label.setOpacity(opacity)
		$g[69].label.setOpacity(opacity)
		$g[70].label.setOpacity(opacity)
	}

	function setPEMode(mode) {
		$g[26]=mode
		if ($g[26]==0) {
			$g[65].setCaption("Pipelining Enabled")
			showPipeline(1)
		} else
		if ($g[26]==1) {
			$g[65].setCaption("Pipelining Disabled")
			showPipeline(0)
		}
		setArg("peMode", $g[26].toString())
	}

	function setBPMode(mode) {
		$g[27]=mode
		if ($g[27]==0) {
			$g[66].setCaption("Branch Prediction")
			showBTB(1)
		} else
		if ($g[27]==1) {
			$g[66].setCaption("Branch Interlock")
			showBTB(0)
		} else
		if ($g[27]==2) {
			$g[66].setCaption("Delayed Branches")
			showBTB(0)
		}
		setArg("bpMode", $g[27].toString())
	}

	function setLIMode(mode) {
		$g[28]=mode
		if ($g[28]==0) {
			$g[67].setCaption("Load Interlock")
		} else
		if ($g[28]==1) {
			$g[67].setCaption("No Load Interlock")
		}
		setArg("liMode", $g[28].toString())
	}

	function setAFMode(mode) {
		$g[29]=mode
		if ($g[29]==0) {
			$g[68].setCaption("ALU Forwarding")
			showALUForwarding(1)
		} else
		if ($g[29]==1) {
			$g[68].setCaption("ALU Interlock")
			showALUForwarding(0)
		} else
		if ($g[29]==2) {
			$g[68].setCaption("No ALU Interlock")
			showALUForwarding(0)
		}
		setArg("afMode", $g[29].toString())
	}

	function setSFMode(mode) {
		$g[30]=mode
		if ($g[30]==0) {
			$g[69].setCaption("Store Operand\nForwarding")
			showSMDRForwarding(1)
		} else
		if ($g[30]==1) {
			$g[69].setCaption("Store Interlock")
			showSMDRForwarding(0)
		} else
		if ($g[30]==2) {
			$g[69].setCaption("No Store Interlock")
			showSMDRForwarding(0)
		}
		setArg("sfMode", $g[30].toString())
	}

	function setZFMode(mode) {
		$g[31]=mode
		if ($g[31]==0) {
			$g[70].setCaption("CPSR Forwarding")
			showZeroForwarding(1)
		} else
		if ($g[31]==1) {
			$g[70].setCaption("CPSR Interlock")
			showZeroForwarding(0)
		} else
		if ($g[31]==2) {
			$g[70].setCaption("No CPSR Interlock")
			showZeroForwarding(0)
		}
		setArg("zfMode", $g[31].toString())
	}

	function $eh28(enter, x, y) {
		$g[178].setBrush(enter ? $g[9] : $g[13])
	}

	function $eh29(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			setArg("help", "0")
			$g[20].setOpacity(0)
		}
		return 0
	}

	function btbIndex(pc) {
		for (let lp1 = 0; lp1<2; lp1++)
		if ($g[80][lp1].value==pc)
		return lp1
		return -1
	}

	function calcNewPC() {
		if (instrIsBranch($g[98].vIns)) {
			let pen = $g[108]
			$g[180]=$g[121]
			$g[181]=$g[123]
			if (testCondition($g[98].vCond)) {
				if ($g[98].vIns==B || $g[98].vIns==BL) {
					$g[183]=($g[99].value+$g[98].vRs1)&127
				}
			} else {
				$g[183]=$g[99].value+4
			}
			$g[184]=$g[88]
		}
	}

	function updBTB() {
		if ($g[183]!=$g[78].value) {
			$g[78].setNewValue($g[183])
			$g[179]=$g[184]
			if ($g[27]==BRANCH_PREDICTION) {
				if ($g[183]==$g[99].value+4) {
					if (btbIndex($g[99].value)>=0)
					$g[80][btbIndex($g[99].value)].setInvalid(1)
				} else {
					if (btbIndex($g[99].value)>=0)
					$g[24]=btbIndex($g[99].value)
					else 
					$g[24]=($g[24]) ? 0 : 1
					$g[80][$g[24]].setNewValue($g[99].value)
					$g[80][$g[24]].setInvalid(0)
					$g[80][$g[24]].useTag=0
					$g[81][$g[24]].setNewValue($g[183])
				}
			}
		}
	}

	function detectStall() {
		$g[23]=NO_STALL
		$g[25]=0
		if ($g[29]==ALU_INTERLOCK) {
			if (instrOpTypeRdt($g[133].vIns)==OP_TYPE_REG) {
				if ((instrOpTypeRs1($g[98].vIns)==OP_TYPE_REG) && ($g[98].vRs1==$g[133].vRdt))
				$g[23]=DATA_STALL
				if ((instrOpTypeRs2($g[98].vIns)==OP_TYPE_REG) && ($g[98].vRs2==$g[133].vRdt))
				$g[23]=DATA_STALL
			}
			if (instrOpTypeRdt($g[156].vIns)==OP_TYPE_REG) {
				if ((instrOpTypeRs1($g[98].vIns)==OP_TYPE_REG) && ($g[98].vRs1==$g[156].vRdt))
				$g[23]=DATA_STALL
				if ((instrOpTypeRs2($g[98].vIns)==OP_TYPE_REG) && ($g[98].vRs2==$g[156].vRdt))
				$g[23]=DATA_STALL
			}
		}
		if (($g[30]==STORE_INTERLOCK) && ($g[98].vIns==STR)) {
			if ((instrOpTypeRdt($g[133].vIns)==OP_TYPE_REG) && ($g[133].vRdt==$g[98].vRdt))
			$g[23]=DATA_STALL
			if ((instrOpTypeRdt($g[156].vIns)==OP_TYPE_REG) && ($g[156].vRdt==$g[98].vRdt))
			$g[23]=DATA_STALL
		}
		if (($g[31]==ZERO_INTERLOCK) && instrIsBranch($g[98].vIns)) {
			if ((instrOpTypeRdt($g[133].vIns)==OP_TYPE_REG) && ($g[133].vRdt==$g[98].vRs1))
			$g[23]=DATA_STALL
			if ((instrOpTypeRdt($g[156].vIns)==OP_TYPE_REG) && ($g[156].vRdt==$g[98].vRs1))
			$g[23]=DATA_STALL
		}
		if (($g[28]==LOAD_INTERLOCK) && ($g[133].vIns==LDR)) {
			if ((instrOpTypeRs1($g[98].vIns)==OP_TYPE_REG) && ($g[98].vRs1==$g[133].vRdt))
			$g[23]=DATA_STALL
			if ((instrOpTypeRs2($g[98].vIns)==OP_TYPE_REG) && ($g[98].vRs2==$g[133].vRdt))
			$g[23]=DATA_STALL
		}
		if ($g[23]==NO_STALL && $g[185]==0 && ($g[98].vIns==MUL)) {
			let Rm = $g[100][$g[98].vRs1].value
			let Rs = $g[100][$g[98].vRs2].value
			if ((Rm==255 || Rm==0) && (Rs==255 || Rs==0)) {
				$g[185]=0
			} else {
				$g[185]=1
			}
		} else
		if ($g[185]>0) {
			$g[185]--
			$g[23]=MUL_STALL
		}
		if (($g[23]==NO_STALL) && ($g[27]!=DELAYED_BRANCHES) && instrIsBranch($g[98].vIns) && ($g[183]!=$g[78].value)) {
			$g[25]=1
			$g[23]=CTRL_STALL
		}
		if ($g[23]==DATA_STALL) {
			$g[77].setStall(1, 0)
		} else
		if ($g[23]==CTRL_STALL) {
			$g[77].setStall(1, 1)
		}
	}

	function setlocked() {
		let b_locked = $g[32] || $g[22]
		$g[65].showLocked(b_locked)
		$g[66].showLocked(b_locked)
		$g[67].showLocked(b_locked)
		$g[68].showLocked(b_locked)
		$g[69].showLocked(b_locked)
		$g[70].showLocked(b_locked)
	}

	function $eh30(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setPEMode(($g[26]+1)%2)
			resetCircuit()
		}
		return 0
	}

	function $eh31(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setBPMode(($g[27]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh32(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setLIMode(($g[28]+1)%2)
			resetCircuit()
		}
		return 0
	}

	function $eh33(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setAFMode(($g[29]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh34(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setSFMode(($g[30]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh35(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setZFMode(($g[31]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh36(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			let lp1, opcode, reg
			let instr
			let s = "saveanim.php?state="
			for (lp1=0; lp1<32; lp1++) {
				instr=$g[76].instruction[lp1]
				opcode=(instr.vIns<<24)|(instr.vRdt<<16)|(instr.vRs1<<8)|(instr.vRs2)
				s=sprintf("%si%d='0x%08X' ", s, lp1, opcode)
			}
			for (lp1=0; lp1<4; lp1++) {
				reg=$g[100][lp1].value
				s=sprintf("%sr%d='0x%02X' ", s, lp1, reg)
			}
			for (lp1=0; lp1<4; lp1++) {
				reg=$g[159][lp1].value
				s=sprintf("%sm%d='0x%02X' ", s, lp1, reg)
			}
			s=sprintf("%speMode='%d' bpMode='%d' liMode='%d' afMode='%d' sfMode='%d' zfMode='%d'", s, $g[26], $g[27], $g[28], $g[29], $g[30], $g[31])
			getURL(s)
		}
		return 0
	}

	function $eh37(down, flags, x, y) {
		if (down && (flags&MB_LEFT))
		getURL("https://www.scss.tcd.ie/Jeremy.Jones/VivioJS/vivio.htm")
		return 0
	}

	function $eh38(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT))
		getURL("showanim.php")
	}

	function $eh39(enter, x, y) {
		$g[75].setBrush(enter ? $g[8] : $g[12])
		$g[75].setTxtPen(enter ? $g[3] : $g[1])
		return 0
	}

	function $eh40(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			$g[14]=($g[14]==maxexample) ? 0 : $g[14]+1
			setArg("example", $g[14].toString())
			reset()
		}
		return 0
	}

	function execute(thread) {

		switchToThread(thread);

		while (1) {
			switch ($pc) {
			case -1:
				return;		// catch thread termination
			case 0:
				enterf(0);	// started with a function call
				$g[1] = new SolidPen(0, 1, BLACK)
				$g[2] = new SolidPen(0, 0, GRAY64)
				$g[3] = new SolidPen(0, 0, RED)
				$g[4] = new SolidPen(0, 0, WHITE)
				$g[5] = new SolidBrush(BLACK)
				$g[6] = new SolidBrush(GRAY64)
				$g[7] = new SolidBrush(LIGHT_BLUE)
				$g[8] = new SolidBrush(GRAY192)
				$g[9] = new SolidBrush(GRAY224)
				$g[10] = new SolidBrush(MARINE)
				$g[11] = new SolidBrush(RED)
				$g[12] = new SolidBrush(WHITE)
				$g[13] = new SolidBrush(YELLOW)
				$g[14] = 0
				setViewport(0, 0, WIDTH, HEIGHT, 1)
				setBgBrush($g[12])
				$g[15] = new Font("Calibri", 22)
				$g[16] = new Font("Calibri", 22, STRIKETHROUGH)
				$g[17] = new Layer(1, 3)
				$g[18] = new Layer(2, 3)
				$g[19] = new Layer(3, 0)
				$g[20] = new Layer(5, 0)
				$g[21] = new SolidBrush(RED)
				$g[22] = 0
				$g[23] = NO_STALL
				$g[24] = 1
				$g[25] = 0
				$g[26] = 0
				$g[27] = 0
				$g[28] = 0
				$g[29] = 0
				$g[30] = 0
				$g[31] = 0
				$g[32] = 0
				$g[33] = 0
				$g[34] = 0
				$g[35] = newArray(MAX_COND+1)
				$g[35][def]="  "
				$g[35][EQ]="EQ"
				$g[35][NE]="NE"
				$g[35][HS]="HS"
				$g[35][CS]="CS"
				$g[35][LO]="LO"
				$g[35][CC]="CC"
				$g[35][MI]="MI"
				$g[35][PL]="PL"
				$g[35][VS]="VS"
				$g[35][VC]="VC"
				$g[35][HI]="HI"
				$g[35][LS]="LS"
				$g[35][GE]="GE"
				$g[35][LT]="LT"
				$g[35][GT]="GT"
				$g[35][LE]="LE"
				$g[35][AL]="AL"
				$g[35][NV]="NV"
				$g[36] = newArray(49)
				$g[36][NOP]="NOP"
				$g[36][ADD]="ADD"
				$g[36][ADC]="ADC"
				$g[36][SUB]="SUB"
				$g[36][SBC]="SBC"
				$g[36][RSB]="RSB"
				$g[36][RSC]="RSC"
				$g[36][MUL]="MUL"
				$g[36][AND]="AND"
				$g[36][ORR]="ORR"
				$g[36][EOR]="EOR"
				$g[36][BIC]="BIC"
				$g[36][LSL]="LSL"
				$g[36][LSR]="LSR"
				$g[36][ASR]="ASR"
				$g[36][ROR]="ROR"
				$g[36][ADDi]="ADD(i)"
				$g[36][ADCi]="ADC(i)"
				$g[36][SUBi]="SUB(i)"
				$g[36][SBCi]="SBC(i)"
				$g[36][RSBi]="RSB(i)"
				$g[36][RSCi]="RSC(i)"
				$g[36][ANDi]="AND(i)"
				$g[36][ORRi]="ORR(i)"
				$g[36][EORi]="EOR(i)"
				$g[36][BICi]="BIC(i)"
				$g[36][LSLi]="LSL(i)"
				$g[36][LSRi]="LSR(i)"
				$g[36][ASRi]="ASR(i)"
				$g[36][RORi]="ROR(i)"
				$g[36][CMN]="CMN"
				$g[36][CMP]="CMP"
				$g[36][TEQ]="TEQ"
				$g[36][TST]="TST"
				$g[36][CMNi]="CMN(i)"
				$g[36][CMPi]="CMP(i)"
				$g[36][TEQi]="TEQ(i)"
				$g[36][TSTi]="TST(i)"
				$g[36][MOV]="MOV"
				$g[36][MVN]="MVN"
				$g[36][LDR]="LDR"
				$g[36][STR]="STR"
				$g[36][MOVi]="MOV(i)"
				$g[36][MVNi]="MVN(i)"
				$g[36][B]="B"
				$g[36][BL]="BL"
				$g[36][HALT]="HALT"
				$g[36][STALL]="STALL"
				$g[36][EMPTY]="EMPTY"
				$g[37] = new SolidBrush(BORDEAU)
				$g[38] = new SolidBrush(WHITE)
				$g[39] = new SolidPen(DOT, 1, rgba(0.75, 0.75, 0.75))
				$g[40] = new SolidPen(SOLID, 1, RED, ARROW60_END)
				$g[41] = new SolidBrush(PURPLE)
				$g[42] = new SolidBrush(WHITE)
				$g[43] = new SolidBrush(LIGHT_BLUE)
				$g[44] = new Font("Calibri", 24)
				$g[45] = new SolidPen(SOLID, 1, RED, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[46] = new SolidPen(SOLID, 1, GREEN, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[47] = new SolidPen(SOLID, 1, ORANGE, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[48] = new SolidBrush(WHITE)
				$g[49] = new SolidBrush(GRAY224)
				$g[50] = new SolidBrush(PURPLE)
				$g[51] = new SolidBrush(WHITE)
				$g[52] = $g[44]
				$g[53] = $g[15]
				$g[54] = getArg("name", "")
				if (!($g[54]!="")) {
					$pc = 1
					continue
				}
				$g[54]=sprintf(":  %s", $g[54])
				$pc = 1
			case 1:
				$g[55] = new Font("Calibri", 54, SMALLCAPS|ITALIC)
				$g[56] = new Rectangle2($g[0], 0, HLEFT, 0, new SolidBrush(DARK_BLUE), 27, 27, 911, 66, $g[4], $g[55], sprintf(" ARM9 TDMI Animation %s", $g[54]))
				$g[57] = new SolidPen(DASH, 3, DARK_BLUE, ROUND_START|ROUND_JOIN|ROUND_END)
				new Line2($g[0], 0, ABSOLUTE, $g[57], 437, 176, 1993, 176)
				new Line2($g[0], 0, ABSOLUTE, $g[57], 437, 1000, 1993, 1000)
				new Line2($g[0], 0, ABSOLUTE, $g[57], 437, 176, 437, 1000)
				$g[58] = new Line2($g[0], 0, ABSOLUTE, $g[57], 749, 176, 749, 1000)
				$g[59] = new Line2($g[0], 0, ABSOLUTE, $g[57], 1100, 176, 1100, 1000)
				$g[60] = new Line2($g[0], 0, ABSOLUTE, $g[57], 1560, 176, 1560, 1000)
				$g[61] = new Line2($g[0], 0, ABSOLUTE, $g[57], 1858, 176, 1858, 1000)
				new Line2($g[0], 0, ABSOLUTE, $g[57], 1993, 176, 1993, 1000)
				$g[62] = new SolidPen(DOT, THIN, BLACK)
				new Line2($g[0], 0, ABSOLUTE, $g[62], 27, 1008, 1993, 1008)
				$g[63] = new Font("Calibri", 27, BOLD)
				$g[64] = new Button(54, 1014, 216, 54, "Save Configuration", BUTTON_SP)
				$g[65] = new Button(425, 1014, 216, 44, "Pipelining Enabled", BUTTON_PE)
				$g[66] = new Button(668, 1014, 216, 44, "Branch Prediction", BUTTON_BP)
				$g[67] = new Button(911, 1014, 216, 44, "Load Interlock", BUTTON_LI)
				$g[68] = new Button(1155, 1014, 216, 44, "ALU Forwarding", BUTTON_AF)
				$g[69] = new Button(1398, 1014, 216, 44, "Store Operand\nForwarding", BUTTON_SF)
				$g[70] = new Button(1641, 1014, 216, 44, "CPSR Forwarding", BUTTON_ZF)
				$g[71] = new Image($g[0], 0, 0, 0, "vivio.png", 1885, 1014, 0, 0, LOGOW, LOGOH)
				new Txt($g[0], 0, HLEFT|VTOP, 27, 101, $g[2], $g[15], "instructions executed:")
				$g[72] = new Txt($g[0], 0, HLEFT|VTOP, 27, 123, $g[2], $g[15], "ticks:")
				$g[73] = new Txt($g[0], 0, HLEFT|VTOP, 243, 101, $g[3], $g[15], "0")
				$g[74] = new Txt($g[0], 0, HLEFT|VTOP, 243, 123, $g[3], $g[15], "0")
				$g[75] = new Rectangle2($g[0], 0, 0, 0, 0, 27, 150, 270, 27, 0, $g[15], "Instruction Cache")
				$g[76] = new InstructionMemory(27, 190, 390, 715)
				$g[77] = new AnimatedClock($g[0], 54, 914, 216, 66)
				$g[78] = new Register(641, 463, 54, 88, TOP, "PC")
				$g[79] = new Rectangle2($g[0], 0, 0, 0, 0, 506, 187, 216, 22, 0, $g[15], "Branch Target Buffer")
				$g[80] = newArray(2)
				$g[80][0]=new Register(506, 220, 108, 44, LEFT, "PC")
				$g[80][1]=new Register(506, 264, 108, 44, LEFT, "PC")
				$g[81] = newArray(2)
				$g[81][0]=new Register(614, 220, 108, 44, RIGHT, "PPC")
				$g[81][1]=new Register(614, 264, 108, 44, RIGHT, "PPC")
				$g[82] = new Component(641, 375, 81, 22, "mux 2")
				$g[83] = new Component(560, 452, 27, 110, "mux 1")
				$g[84] = new Component(533, 595, 54, 22, "+4")
				$g[85] = new AnimPipe()
				$g[85].addPoint(415, 860)
				$g[85].addPoint(776, 860)
				$g[86] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 587, 8130, -81, -13, 130, 26, $g[4], $g[15])
				$g[86].setRounded(2, 2)
				$g[87] = new AnimPipe()
				$g[87].addPoint(668, 551)
				$g[87].addPoint(668, 705)
				$g[87].addPoint(415, 705)
				$g[88] = new AnimPipe()
				$g[88].addPoint(911, 375)
				$g[88].addPoint(911, 353)
				$g[88].addPoint(506, 353)
				$g[88].addPoint(506, 474)
				$g[88].addPoint(560, 474)
				$g[89] = new AnimPipe()
				$g[89].addPoint(506, 264)
				$g[89].addPoint(479, 264)
				$g[89].addPoint(479, 496)
				$g[89].addPoint(560, 496)
				$g[90] = new AnimPipe()
				$g[90].addPoint(952, 110)
				$g[90].addPoint(452, 110)
				$g[90].addPoint(452, 518)
				$g[90].addPoint(560, 518)
				$g[91] = new AnimPipe()
				$g[91].addPoint(533, 606)
				$g[91].addPoint(506, 606)
				$g[91].addPoint(506, 540)
				$g[91].addPoint(560, 540)
				$g[92] = new AnimPipe()
				$g[92].addPoint(587, 507)
				$g[92].addPoint(641, 507)
				$g[93] = new AnimPipe()
				$g[93].addPoint(668, 462)
				$g[93].addPoint(668, 397)
				$g[94] = new AnimPipe()
				$g[94].addPoint(668, 551)
				$g[94].addPoint(668, 606)
				$g[94].addPoint(587, 606)
				$g[95] = new AnimPipe()
				$g[95].addPoint(695, 507)
				$g[95].addPoint(749, 507)
				$g[95].addPoint(776, 507)
				$g[96] = new AnimPipe()
				$g[96].addPoint(681, 375)
				$g[96].addPoint(681, 309)
				$g[97] = new AnimPipe()
				$g[97].addPoint(830, 860)
				$g[97].addPoint(1132, 860)
				$g[98] = new InstructionRegister(776, 760, 54, 235, "ID")
				$g[99] = new Register(776, 463, 54, 88, TOP, "PC1")
				new Txt($g[0], 0, HLEFT|VTOP, 1182, 88, 0, $g[15], "Register\nFile")
				$g[100] = newArray(16)
				$g[100][0]=new Register(952, 66, 32, 88, TOP, "R0")
				$g[100][1]=new Register(984, 66, 32, 88, TOP, "R1")
				$g[100][2]=new Register(1016, 66, 32, 88, TOP, "R2")
				$g[100][3]=new Register(1048, 66, 32, 88, TOP, "R3")
				$g[100][4]=new Register(1080, 66, 32, 88, TOP, "R4")
				$g[100][5]=new Register(1112, 66, 32, 88, TOP, "R5")
				$g[100][6]=new Register(1144, 66, 32, 88, TOP, "R6")
				$g[100][7]=new Register(1176, 66, 32, 88, TOP, "R7")
				$g[100][8]=new Register(1208, 66, 32, 88, TOP, "R8")
				$g[100][9]=new Register(1240, 66, 32, 88, TOP, "R9")
				$g[100][10]=new Register(1272, 66, 32, 88, TOP, "R10")
				$g[100][11]=new Register(1304, 66, 32, 88, TOP, "R11")
				$g[100][12]=new Register(1336, 66, 32, 88, TOP, "R12")
				$g[100][13]=new Register(1368, 66, 32, 88, TOP, "SP")
				$g[100][14]=new Register(1400, 66, 32, 88, TOP, "LR")
				$g[100][15]=new Register(1432, 66, 32, 88, TOP, "PC")
				$g[101] = new CPSR(1490, 66, 140, 88, 0)
				$g[102] = new Component(844, 375, 135, 22, "mux 3")
				$g[103] = new Component(830, 595, 81, 22, "ADD4")
				$g[104] = new Component(911, 595, 81, 22, "ADDi")
				$g[105] = new Component(776, 220, 27, 88, "mux 4")
				$g[106] = new Component(1051, 518, 27, 66, "mux 5")
				new Rectangle2($g[0], 0, 0, 0, 0, 857, 661, 54, 22, 0, $g[15], "4")
				$g[107] = new SolidPen(SOLID, 0, PURPLE, ARROW60_END)
				$g[108] = new SolidPen(SOLID, 5, RED, ARROW60_END)
				$g[109] = new SolidPen(SOLID, THICK, BLACK)
				$g[110] = new CPSR(1568, 570, 60, 40, 1)
				$g[111] = new CPSR(1865, 570, 60, 40, 1)
				$g[112] = new AnimPipe()
				$g[112].addPoint(803, 463)
				$g[112].addPoint(803, 441)
				$g[112].addPoint(695, 441)
				$g[112].addPoint(695, 397)
				$g[113] = new AnimPipe()
				$g[113].addPoint(871, 595)
				$g[113].addPoint(871, 562)
				$g[113].addPoint(1051, 562)
				$g[114] = new AnimPipe()
				$g[114].addPoint(803, 551)
				$g[114].addPoint(803, 705)
				$g[114].addPoint(857, 705)
				$g[114].addPoint(857, 617)
				$g[115] = new AnimPipe()
				$g[115].addPoint(803, 551)
				$g[115].addPoint(803, 705)
				$g[115].addPoint(938, 705)
				$g[115].addPoint(938, 617)
				$g[116] = new AnimPipe()
				$g[116].addPoint(884, 661)
				$g[116].addPoint(884, 617)
				$g[117] = new AnimPipe()
				$g[117].addPoint(830, 860)
				$g[117].addPoint(965, 860)
				$g[117].addPoint(965, 617)
				$g[118] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 8235, 829, -32, -13, 65, 32, $g[4], $g[15])
				$g[118].setRounded(2, 2)
				$g[119] = new AnimPipe()
				$g[119].addPoint(871, 595)
				$g[119].addPoint(871, 397)
				$g[120] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 871, 441, -32, -13, 65, 32, $g[4], $g[15])
				$g[120].setRounded(2, 2)
				$g[121] = new AnimPipe()
				$g[121].addPoint(952, 595)
				$g[121].addPoint(952, 397)
				$g[122] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 952, 441, -32, -13, 65, 32, $g[4], $g[15])
				$g[122].setRounded(2, 2)
				$g[123] = new AnimPipe()
				$g[123].addPoint(911, 375)
				$g[123].addPoint(911, 287)
				$g[123].addPoint(803, 287)
				$g[124] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 911, 353, -32, -13, 65, 32, $g[4], $g[15])
				$g[124].setRounded(2, 2)
				$g[125] = new AnimPipe()
				$g[125].addPoint(776, 264)
				$g[125].addPoint(722, 264)
				$g[126] = new AnimPipe()
				$g[126].addPoint(952, 110)
				$g[126].addPoint(911, 110)
				$g[126].addPoint(911, 242)
				$g[126].addPoint(803, 242)
				$g[127] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 911, 97, -32, 0, 65, 32, $g[4], $g[15])
				$g[128] = new AnimPipe()
				$g[128].addPoint(1078, 551)
				$g[128].addPoint(1132, 551)
				$g[129] = new AnimPipe()
				$g[129].addPoint(1019, 154)
				$g[129].addPoint(1019, 540)
				$g[129].addPoint(1051, 540)
				$g[130] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 1019, 181, -32, 0, 65, 32, $g[4], $g[15], "R0:0")
				$g[130].setRounded(2, 2)
				$g[131] = new AnimPipe()
				$g[131].addPoint(1051, 154)
				$g[131].addPoint(1051, 463)
				$g[131].addPoint(1082, 463)
				$g[132] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 1051, 181, -32, 0, 65, 32, $g[4], $g[15], "R0:0")
				$g[132].setRounded(2, 2)
				$g[133] = new InstructionRegister(1132, 760, 54, 235, "EX")
				$g[134] = new Register(1132, 419, 54, 88, TOP, "A")
				$g[135] = new Register(1132, 507, 54, 88, BOTTOM, "B")
				$g[136] = new Component(1301, 397, 27, 110, "mux 6")
				$g[137] = new Component(1301, 507, 27, 110, "mux 7")
				$g[138] = new Component(1301, 683, 27, 88, "mux 8")
				$g[139] = new ALU(1445, 419, 88, 176)
				$g[140] = new Component(1351, 537, 75, 50, "Barrel\nShifter")
				$g[141] = new AnimPipe()
				$g[141].addPoint(1186, 860)
				$g[141].addPoint(1614, 860)
				$g[142] = new AnimPipe()
				$g[142].addPoint(1657, 463)
				$g[142].addPoint(1657, 375)
				$g[142].addPoint(1267, 375)
				$g[142].addPoint(1267, 419)
				$g[142].addPoint(1301, 419)
				$g[143] = new AnimPipe()
				$g[143].addPoint(1937, 463)
				$g[143].addPoint(1937, 353)
				$g[143].addPoint(1240, 353)
				$g[143].addPoint(1240, 441)
				$g[143].addPoint(1301, 441)
				$g[144] = new AnimPipe()
				$g[144].addPoint(1186, 485)
				$g[144].addPoint(1301, 485)
				$g[145] = new AnimPipe()
				$g[145].addPoint(1186, 529)
				$g[145].addPoint(1301, 529)
				$g[146] = new AnimPipe()
				$g[146].addPoint(1186, 860)
				$g[146].addPoint(1213, 860)
				$g[146].addPoint(1213, 551)
				$g[146].addPoint(1371, 551)
				$g[147] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 1268, 816, -27, 0, 54, 26, $g[4], $g[15], "IMM")
				$g[147].setRounded(2, 2)
				$g[148] = new AnimPipe()
				$g[148].addPoint(1937, 551)
				$g[148].addPoint(1937, 661)
				$g[148].addPoint(1240, 661)
				$g[148].addPoint(1240, 573)
				$g[148].addPoint(1301, 573)
				$g[149] = new AnimPipe()
				$g[149].addPoint(1657, 551)
				$g[149].addPoint(1657, 639)
				$g[149].addPoint(1267, 639)
				$g[149].addPoint(1267, 595)
				$g[149].addPoint(1301, 595)
				$g[150] = new AnimPipe()
				$g[150].addPoint(1657, 551)
				$g[150].addPoint(1657, 639)
				$g[150].addPoint(1267, 639)
				$g[150].addPoint(1267, 705)
				$g[150].addPoint(1301, 705)
				$g[151] = new AnimPipe()
				$g[151].addPoint(1937, 551)
				$g[151].addPoint(1937, 661)
				$g[151].addPoint(1240, 661)
				$g[151].addPoint(1240, 727)
				$g[151].addPoint(1301, 727)
				$g[152] = new AnimPipe()
				$g[152].addPoint(1159, 595)
				$g[152].addPoint(1159, 749)
				$g[152].addPoint(1301, 749)
				$g[153] = new AnimPipe()
				$g[153].addPoint(1328, 727)
				$g[153].addPoint(1657, 727)
				$g[154] = new AnimPipe()
				$g[154].addPoint(1328, 452)
				$g[154].addPoint(1445, 452)
				$g[154].addPoint(1560, 507)
				$g[154].addPoint(1630, 507)
				$g[155] = new AnimPipe()
				$g[155].addPoint(1328, 562)
				$g[155].addPoint(1445, 562)
				$g[155].addPoint(1560, 507)
				$g[155].addPoint(1630, 507)
				$g[156] = new InstructionRegister(1614, 760, 54, 235, "MA")
				$g[157] = new Register(1630, 463, 54, 88, TOP, "O0")
				$g[158] = new Register(1587, 705, 108, 44, RIGHT, "SMR")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1595, 220, 0, $g[15], "memory\naddress")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1736, 705, 0, $g[15], "memory\ndata-in")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1763, 220, 0, $g[15], "memory\ndata-out")
				new Txt($g[0], 0, HLEFT|VTOP, 1884, 77, 0, $g[15], "Data\nCache\n(memory)")
				$g[159] = newArray(4)
				$g[159][0]=new Register(1654, 66, 108, 44, LEFT, "M0")
				$g[159][1]=new Register(1654, 110, 108, 44, LEFT, "M1")
				$g[159][2]=new Register(1763, 66, 108, 44, RIGHT, "M2")
				$g[159][3]=new Register(1763, 110, 108, 44, RIGHT, "M3")
				$g[160] = new Component(1804, 463, 27, 88, "mux 9")
				$g[161] = new AnimPipe()
				$g[161].addPoint(1668, 860)
				$g[161].addPoint(1885, 860)
				$g[162] = new AnimPipe()
				$g[162].addPoint(1684, 507)
				$g[162].addPoint(1804, 507)
				$g[163] = new AnimPipe()
				$g[163].addPoint(1831, 507)
				$g[163].addPoint(1910, 507)
				$g[164] = new AnimPipe()
				$g[164].addPoint(1684, 507)
				$g[164].addPoint(1695, 507)
				$g[164].addPoint(1695, 154)
				$g[165] = new AnimPipe()
				$g[165].addPoint(1695, 727)
				$g[165].addPoint(1723, 727)
				$g[165].addPoint(1723, 154)
				$g[166] = new AnimPipe()
				$g[166].addPoint(1750, 154)
				$g[166].addPoint(1750, 485)
				$g[166].addPoint(1804, 485)
				$g[167] = new InstructionRegister(1885, 760, 54, 235, "WB")
				$g[168] = new Register(1910, 463, 54, 88, TOP, "O1")
				$g[169] = new AnimPipe()
				$g[169].addPoint(1964, 507)
				$g[169].addPoint(1980, 507)
				$g[169].addPoint(1980, 22)
				$g[169].addPoint(1060, 22)
				$g[169].addPoint(1060, 66)
				$g[139].txtResult.moveToFront()
				resetCircuit()
				$g[172] = ""
				$g[170]=0
				$pc = 2
			case 2:
				if (!($g[170]<32)) {
					$pc = 4
					continue
				}
				$g[76].setOpcode(4*$g[170], 0)
				$pc = 3
			case 3:
				$g[170]++
				$pc = 2
				continue
			case 4:
				$g[170]=0
				$pc = 5
			case 5:
				if (!($g[170]<4)) {
					$pc = 7
					continue
				}
				$g[172]=sprintf("r%d", $g[170])
				$g[100][$g[170]].setValue(getArgAsNum($g[172], 0))
				$pc = 6
			case 6:
				$g[170]++
				$pc = 5
				continue
			case 7:
				$g[170]=0
				$pc = 8
			case 8:
				if (!($g[170]<4)) {
					$pc = 10
					continue
				}
				$g[172]=sprintf("m%d", $g[170])
				$g[159][$g[170]].setValue(getArgAsNum($g[172], 0))
				$pc = 9
			case 9:
				$g[170]++
				$pc = 8
				continue
			case 10:
				setTPS(20)
				$g[14]=getArgAsNum("example", 0)
				if (!($g[14]==0)) {
					$pc = 14
					continue
				}
				$g[170]=0
				$pc = 11
			case 11:
				if (!($g[170]<32)) {
					$pc = 13
					continue
				}
				$g[172]=sprintf("i%d", $g[170])
				$g[76].setOpcode(4*$g[170], getArgAsNum($g[172], 0))
				$pc = 12
			case 12:
				$g[170]++
				$pc = 11
				continue
			case 13:
				$pc = 24
				continue
			case 14:
				if (!($g[14]==1)) {
					$pc = 15
					continue
				}
				$g[76].setValue(44, HALT, 0, 0, 0)
				$g[100][2].setValue(9)
				$g[100][3].setValue(8)
				setTPS(100)
				$pc = 23
				continue
			case 15:
				if (!($g[14]==2)) {
					$pc = 16
					continue
				}
				$g[76].setValue(0, ADD, 1, 2, 3)
				$g[76].setValue(4, SUB, 3, 1, 2)
				$g[76].setValue(8, AND, 2, 1, 3)
				$g[76].setValue(12, EOR, 2, 1, 3)
				$g[76].setValue(16, ADD, 2, 1, 0)
				$g[76].setValue(20, HALT, 0, 0, 0)
				$g[100][1].setValue(1)
				$g[100][2].setValue(2)
				setTPS(50)
				$pc = 22
				continue
			case 16:
				if (!($g[14]==3)) {
					$pc = 17
					continue
				}
				$g[76].setValue(0, ADD, 1, 1, 2)
				$g[76].setValue(4, ADD, 2, 1, 2)
				$g[76].setValue(8, ADD, 1, 1, 2)
				$g[76].setValue(12, ADD, 2, 1, 2)
				$g[76].setValue(16, ADD, 1, 1, 2)
				$g[76].setValue(20, HALT, 0, 0, 0)
				$g[100][1].setValue(1)
				$g[100][2].setValue(2)
				setTPS(50)
				$pc = 21
				continue
			case 17:
				if (!($g[14]==4)) {
					$pc = 18
					continue
				}
				$g[76].setValue(4, ADD, 0, 0, 0)
				$g[76].setValue(8, ADD, 0, 0, 0)
				$g[76].setValue(20, HALT, 0, 0, 0)
				setTPS(50)
				$pc = 20
				continue
			case 18:
				if (!($g[14]==5)) {
					$pc = 19
					continue
				}
				$g[76].setValue(0, B, 0, 0, 1)
				$g[76].setValue(32, ADD, 1, 1, 1)
				$g[76].setValue(36, HALT, 0, 0, 0)
				$g[100][1].setValue(32)
				$pc = 19
			case 19:
				$pc = 20
			case 20:
				$pc = 21
			case 21:
				$pc = 22
			case 22:
				$pc = 23
			case 23:
				$pc = 24
			case 24:
				if (!($g[14]>0)) {
					$pc = 28
					continue
				}
				$g[170]=0
				$pc = 25
			case 25:
				if (!($g[170]<32)) {
					$pc = 27
					continue
				}
				$g[172]=sprintf("i%d", $g[170])
				setArg($g[172], $g[76].getOpcode($g[170]*4).toString())
				$pc = 26
			case 26:
				$g[170]++
				$pc = 25
				continue
			case 27:
				$g[14]=($g[14]>maxexample) ? 0 : $g[14]
				$pc = 28
			case 28:
				$g[173] = getArgAsNum("haltOnHalt", 1)
				$g[27]=getArgAsNum("bpMode", 0)
				setBPMode($g[27])
				$g[28]=getArgAsNum("liMode", 0)
				setLIMode($g[28])
				$g[29]=getArgAsNum("afMode", 0)
				setAFMode($g[29])
				$g[30]=getArgAsNum("sfMode", 0)
				setSFMode($g[30])
				$g[31]=getArgAsNum("zfMode", 0)
				setZFMode($g[31])
				$g[26]=getArgAsNum("peMode", 0)
				setPEMode($g[26])
				$g[22]=getArgAsNum("locked", 0)
				$g[174] = getArgAsNum("help", 1)
				$g[175] = new Rectangle2($g[0], $g[20], 0, 0, $g[12], 0, 0, WIDTH, HEIGHT)
				$g[175].setOpacity(0.5)
				$g[175].setRounded(10, 10)
				$g[176] = new SolidPen(SOLID, 5, RED, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[177] = new Font("Arial", 32, BOLD)
				new Txt($g[0], $g[20], HLEFT|VTOP, 32, 639, $g[176], $g[177], "LEFT CLICK on animation background to start and stop clock.\n\nSHIFT LEFT CLICK on background to execute \"single MIPS clock cycle\".")
				if (!(!$g[22])) {
					$pc = 29
					continue
				}
				$g[175]=new Rectangle2($g[0], $g[20], 0, $g[176], 0, 44, 184, 176, 10)
				$g[175].setRounded(5, 5)
				$g[175]=new Rectangle2($g[0], $g[20], 0, $g[176], 0, 55, 427, 66, 10)
				$g[175].setRounded(5, 5)
				$g[175]=new Rectangle2($g[0], $g[20], 0, $g[176], 0, 132, 427, 31, 10)
				$g[175].setRounded(5, 5)
				$g[175]=new Rectangle2($g[0], $g[20], 0, $g[176], 0, 168, 427, 31, 10)
				$g[175].setRounded(5, 5)
				$g[175]=new Rectangle2($g[0], $g[20], 0, $g[176], 0, 203, 427, 31, 10)
				$g[175].setRounded(5, 5)
				new Txt($g[0], $g[20], HLEFT|VTOP, 397, 132, $g[176], $g[177], "LEFT CLICK to change\ninitial program.")
				new Txt($g[0], $g[20], HLEFT|VTOP, 397, 231, $g[176], $g[177], "LEFT or RIGHT CLICK to \"rotate\"\ninstructions and operands.\nHold and release to reset value.")
				$pc = 29
			case 29:
				$g[175]=new Rectangle2($g[0], $g[20], 0, $g[176], 0, 683, 68, 198, 50)
				$g[175].setRounded(10, 10)
				new Txt($g[0], $g[20], HLEFT|VTOP, 1209, 88, $g[176], $g[177], "LEFT or RIGHT CLICK register\nto increment or decrement value.")
				if (!(!$g[22])) {
					$pc = 30
					continue
				}
				$g[175]=new Rectangle2($g[0], $g[20], 0, $g[176], 0, 242, 1330, 1212, 30)
				$g[175].setRounded(10, 10)
				new Txt($g[0], $g[20], HLEFT|VTOP, 587, 959, $g[176], $g[177], "LEFT CLICK on any of the buttons below to change circuit configuration.")
				$pc = 30
			case 30:
				$g[178] = new Rectangle2($g[0], $g[20], 0, $g[176], $g[13], 925, 507, 270, 66, $g[176], $g[177], "CLOSE HELP")
				$g[178].setRounded(5, 5)
				$g[178].addEventHandler("eventEE", this, $eh28)
				$g[178].addEventHandler("eventMB", this, $eh29)
				if (!($g[174]==0)) {
					$pc = 31
					continue
				}
				$g[20].setOpacity(0)
				$pc = 31
			case 31:
				$g[185] = 0
				$g[65].label.addEventHandler("eventMB", this, $eh30)
				$g[66].label.addEventHandler("eventMB", this, $eh31)
				$g[67].label.addEventHandler("eventMB", this, $eh32)
				$g[68].label.addEventHandler("eventMB", this, $eh33)
				$g[69].label.addEventHandler("eventMB", this, $eh34)
				$g[70].label.addEventHandler("eventMB", this, $eh35)
				$g[64].label.addEventHandler("eventMB", this, $eh36)
				$g[71].addEventHandler("eventMB", this, $eh37)
				$g[56].addEventHandler("eventMB", this, $eh38)
				$g[75].addEventHandler("eventEE", this, $eh39)
				$g[75].addEventHandler("eventMB", this, $eh40)
				callf(265, $obj)
				continue
			case 32:
				returnf(0)
				continue
			case 33:
				enterf(0);	// update
				$obj.vIns=$obj.nIns
				$obj.vSBit=$obj.nSBit
				$obj.vCond=$obj.nCond
				$obj.vRdt=$obj.nRdt
				$obj.vRs1=$obj.nRs1
				$obj.vRs2=$obj.nRs2
				$obj.vIns2=$obj.nIns2
				$obj.vRs3=$obj.nRs3
				$obj.txt=instrText($obj.vIns, $obj.vSBit, $obj.vCond, $obj.vRdt, $obj.vRs1, $obj.vRs2, $obj.nIns2, $obj.nRs3)
				$obj.label.setTxt($obj.txt)
				$obj.r2.setBrush($g[13])
				if (wait(16))
				return
				$pc = 34
			case 34:
				$obj.r2.setBrush($g[12])
				returnf(0)
				continue
			case 35:
				enterf(0);	// update
				$obj.value=$obj.newValue
				$obj.tag=$obj.newTag
				$obj.updateLabel()
				$obj.bg1.setBrush($g[13])
				$obj.bg2.setBrush($g[13])
				if (wait(16))
				return
				$pc = 36
			case 36:
				$obj.bg1.setBrush($g[12])
				$obj.bg2.setBrush($g[12])
				returnf(0)
				continue
			case 37:
				enterf(5);	// animate
				$stack[$fp+1] = 0, $stack[$fp+3] = 0
				$stack[$fp+4] = 0
				$obj.calcLength()
				$obj.fgLine.setPt(0, $obj.px[0], $obj.py[0])
				$obj.fgLine.setPen($obj.fgPen0)
				$stack[$fp+5] = 1
				$pc = 38
			case 38:
				if (!($stack[$fp+5]<$obj.n)) {
					$pc = 41
					continue
				}
				$obj.fgLine.setPt($stack[$fp+5], $obj.px[$stack[$fp+5]-1], $obj.py[$stack[$fp+5]-1])
				$stack[$fp+1]+=$obj.ls[$stack[$fp+5]-1]
				$stack[$fp+2]=round($stack[$fp+1]*$stack[$fp-3]/$obj.ll)
				if ($obj.fgLine.setPt($stack[$fp+5], $obj.px[$stack[$fp+5]], $obj.py[$stack[$fp+5]], $stack[$fp+2]-$stack[$fp+3], 1, 1))
				return
				$pc = 39
			case 39:
				$stack[$fp+3]=$stack[$fp+2]
				$pc = 40
			case 40:
				$stack[$fp+5]++
				$pc = 38
				continue
			case 41:
				if (!($obj.head)) {
					$pc = 42
					continue
				}
				$obj.fgLine.setPen($obj.fgPen1)
				$pc = 42
			case 42:
				returnf(1)
				continue
			case 43:
				enterf(4);	// clockCycle
				$stack[$fp+1] = $stack[$fp-3]/2
				$stack[$fp+2] = $stack[$fp-3]/5
				$stack[$fp+3] = $stack[$fp-3]/10
				$obj.canUpdate=0
				$obj.prev_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.next_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.dot.translate(0, -$obj.ch, $stack[$fp+2], 1, 0)
				if (wait($stack[$fp+1]))
				return
				$pc = 44
			case 44:
				$obj.prev_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.next_clock.translate(-$obj.chw, 0, $stack[$fp+1], 1, 0)
				$obj.dot.translate(0, $obj.ch, $stack[$fp+2], 1, 0)
				if (wait($stack[$fp+3]))
				return
				$pc = 45
			case 45:
				$obj.canUpdate=1
				$obj.prev_clock.translate(2*$obj.cw, 0)
				$obj.prev_clock.setPen($obj.stall ? ($obj.type ? $g[47] : $g[45]) : $g[46])
				if (wait($stack[$fp+2]*2))
				return
				$pc = 46
			case 46:
				$stack[$fp+4] = $obj.next_clock
				$obj.next_clock=$obj.prev_clock
				$obj.prev_clock=$stack[$fp+4]
				if (!($obj.stall)) {
					$pc = 47
					continue
				}
				$obj.stall--
				$pc = 47
			case 47:
				returnf(1)
				continue
			case 48:
				enterf(0);	// ifExec
				if (!(($g[23]==NO_STALL) || ($g[23]==CTRL_STALL))) {
					$pc = 49
					continue
				}
				fork(35, $g[78])
				$g[76].setActive($g[78].newValue)
				$pc = 49
			case 49:
				if (wait(8))
				return
				$pc = 50
			case 50:
				if (!(($g[27]==BRANCH_PREDICTION) && (btbIndex($g[78].value)!=-1))) {
					$pc = 51
					continue
				}
				$g[24]=btbIndex($g[78].value)
				$g[78].setNewValue($g[81][$g[24]].value)
				$g[179]=$g[89]
				$pc = 52
				continue
			case 51:
				$g[78].setNewValue(($g[78].value+4)&127)
				$g[179]=$g[91]
				$pc = 52
			case 52:
				$g[99].setNewValue($g[78].value)
				$g[98].setNewInstruction($g[76].instruction[$g[78].value/4])
				if (wait(8))
				return
				$pc = 53
			case 53:
				fork(37, $g[95], 64)
				fork(37, $g[87], 24)
				fork(37, $g[94], 24)
				if (!(($g[27]==BRANCH_PREDICTION) && (instrIsBranch($g[98].vIns)))) {
					$pc = 59
					continue
				}
				if (!($g[23]==CTRL_STALL)) {
					$pc = 55
					continue
				}
				callf(37, $g[93], 12)
				continue
			case 54:
				$pc = 57
				continue
			case 55:
				callf(37, $g[112], 12)
				continue
			case 56:
				$pc = 57
			case 57:
				callf(37, $g[96], 12)
				continue
			case 58:
				$pc = 61
				continue
			case 59:
				if (wait(24))
				return
				$pc = 60
			case 60:
				$pc = 61
			case 61:
				fork(37, $g[85], 40)
				if (!(($g[27]==BRANCH_PREDICTION) && (btbIndex($g[78].value)!=-1))) {
					$pc = 62
					continue
				}
				$g[80][btbIndex($g[78].value)].highlight($g[21])
				$g[81][btbIndex($g[78].value)].highlight($g[21])
				$pc = 62
			case 62:
				$g[86].setTxt($g[98].getNewInstrTxt())
				if ($g[86].setOpacity(1, 16, 1, 1))
				return
				$pc = 63
			case 63:
				callf(37, $g[179], 16)
				continue
			case 64:
				callf(37, $g[92], 8)
				continue
			case 65:
				returnf(0)
				continue
			case 66:
				enterf(0);	// sendBTBOperands
				callf(37, $g[181], 18)
				continue
			case 67:
				callf(37, $g[125], 6)
				continue
			case 68:
				returnf(0)
				continue
			case 69:
				enterf(1);	// idExec
				if (!($g[23]==NO_STALL)) {
					$pc = 70
					continue
				}
				fork(35, $g[99])
				fork(33, $g[98])
				$pc = 70
			case 70:
				if (!($g[25] && ($g[27]==BRANCH_PREDICTION))) {
					$pc = 71
					continue
				}
				fork(35, $g[80][$g[24]])
				fork(35, $g[81][$g[24]])
				$pc = 71
			case 71:
				if (wait(16))
				return
				$pc = 72
			case 72:
				fork(37, $g[97], 64)
				if (!(instrIsBranch($g[98].vIns))) {
					$pc = 79
					continue
				}
				if (!($g[98].vIns==BL)) {
					$pc = 73
					continue
				}
				$g[135].setNewValue($g[99].value)
				$pc = 73
			case 73:
				if (!($g[23]==NO_STALL)) {
					$pc = 76
					continue
				}
				fork(37, $g[115], 16)
				fork(37, $g[117], 16)
				if (wait(12))
				return
				$pc = 74
			case 74:
				$g[118].setTxt("%02X", $g[98].vRs1)
				$g[118].setOpacity(1)
				if (wait(4))
				return
				$pc = 75
			case 75:
				fork(37, $g[121], 8)
				$g[122].setTxt("%02X", ($g[99].value+$g[98].vRs1)&255)
				$g[122].setOpacity(1, 8, 1, 0)
				$pc = 78
				continue
			case 76:
				if (wait(24))
				return
				$pc = 77
			case 77:
				$pc = 78
			case 78:
				$pc = 81
				continue
			case 79:
				if (wait(24))
				return
				$pc = 80
			case 80:
				$pc = 81
			case 81:
				if (wait(9))
				return
				$pc = 82
			case 82:
				if (!(instrIsBranch($g[98].vIns))) {
					$pc = 83
					continue
				}
				calcNewPC()
				$pc = 83
			case 83:
				if (!(instrIsBranch($g[98].vIns))) {
					$pc = 84
					continue
				}
				$g[124].setTxt("%02X", $g[183])
				$g[124].setOpacity(1, 8, 1, 0)
				$pc = 84
			case 84:
				if (!(instrIsBranch($g[98].vIns))) {
					$pc = 85
					continue
				}
				fork(66, $obj)
				$pc = 85
			case 85:
				detectStall()
				if (!(instrIsBranch($g[98].vIns) && ($g[23]!=DATA_STALL))) {
					$pc = 86
					continue
				}
				updBTB()
				$pc = 86
			case 86:
				if (!($g[23]==NO_STALL || $g[23]==MUL_STALL)) {
					$pc = 87
					continue
				}
				$g[133].setNewValue($g[98].vIns, $g[98].vSBit, $g[98].vCond, $g[98].vRdt, $g[98].vRs1, $g[98].vRs2, $g[98].vIns2, $g[98].vRs3)
				$pc = 88
				continue
			case 87:
				$g[133].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				$pc = 88
			case 88:
				if (wait(7))
				return
				$pc = 89
			case 89:
				if (!((instrOpTypeRdt($g[98].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[98].vIns) || instrHasNoDstRI($g[98].vIns)) && !instrIsBranch($g[98].vIns))) {
					$pc = 100
					continue
				}
				if (!(instrOpTypeRs1($g[98].vRs1)!=OP_TYPE_IMM)) {
					$pc = 90
					continue
				}
				$g[100][$g[98].vRs1].highlight($g[21])
				$pc = 90
			case 90:
				if (!(instrOpTypeRs1($g[98].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 91
					continue
				}
				$g[134].setNewValue($g[100][$g[98].vRs1].value)
				$pc = 91
			case 91:
				if (!(instrOpTypeRs2($g[98].vIns)==OP_TYPE_REG)) {
					$pc = 92
					continue
				}
				$g[100][$g[98].vRs2].highlight($g[21])
				$g[135].setNewValue($g[100][$g[98].vRs2].value)
				$pc = 94
				continue
			case 92:
				if (!(instrOpTypeRdt($g[98].vRdt)!=OP_TYPE_UNUSED)) {
					$pc = 93
					continue
				}
				$g[100][$g[98].vRdt].highlight($g[21])
				$pc = 93
			case 93:
				$g[135].setNewValue($g[100][$g[98].vRdt].value)
				$pc = 94
			case 94:
				if (!(instrOpTypeRs1($g[98].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 95
					continue
				}
				$g[132].setTxt("R%d:%02X", $g[98].vRs1, $g[100][$g[98].vRs1].value)
				$g[132].setOpacity(1)
				fork(37, $g[131], 24)
				$pc = 95
			case 95:
				if (!((!instrIsArRI($g[98].vIns)) && ($g[98].vIns!=LDR) && (!instrHasNoOp2RI($g[98].vIns)))) {
					$pc = 99
					continue
				}
				$stack[$fp+1] = ($g[98].vIns==STR || $g[98].vIns) ? $g[98].vRdt : $g[98].vRs2
				if (!(instrOpTypeRs2($g[98].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 98
					continue
				}
				$g[130].setTxt("R%d:%02X", $stack[$fp+1], $g[100][$stack[$fp+1]].value)
				$g[130].setOpacity(1)
				callf(37, $g[129], 18)
				continue
			case 96:
				callf(37, $g[128], 6)
				continue
			case 97:
				$pc = 98
			case 98:
				$pc = 99
			case 99:
				$pc = 100
			case 100:
				returnf(0)
				continue
			case 101:
				enterf(7);	// exExec
				if (!($g[23]!=MUL_STALL)) {
					$pc = 102
					continue
				}
				fork(33, $g[133])
				$pc = 102
			case 102:
				if (!(!instrIsNop($g[133].nIns))) {
					$pc = 103
					continue
				}
				fork(35, $g[134])
				fork(35, $g[135])
				$pc = 103
			case 103:
				if (wait(8))
				return
				$pc = 104
			case 104:
				$g[156].setNewValue($g[133].vIns, $g[133].vSBit, $g[133].vCond, $g[133].vRdt, $g[133].vRs1, $g[133].vRs2, $g[133].vIns2, $g[133].vRs3)
				if (!(instrOpTypeRdt($g[133].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[133].vIns) || instrHasNoDstRI($g[133].vIns))) {
					$pc = 135
					continue
				}
				if (!(instrOpTypeRs1($g[133].vIns)==OP_TYPE_IMM)) {
					$pc = 105
					continue
				}
				$stack[$fp+1]=$g[144]
				$stack[$fp+4]=$g[133].vRs1
				$pc = 112
				continue
			case 105:
				if (!($g[29]==ALU_FORWARDING)) {
					$pc = 110
					continue
				}
				if (!($g[157].tagMatches($g[133].vRs1))) {
					$pc = 106
					continue
				}
				$stack[$fp+1]=$g[142]
				$stack[$fp+4]=$g[157].value
				$pc = 109
				continue
			case 106:
				if (!($g[168].tagMatches($g[133].vRs1))) {
					$pc = 107
					continue
				}
				$stack[$fp+1]=$g[143]
				$stack[$fp+4]=$g[168].value
				$pc = 108
				continue
			case 107:
				$stack[$fp+1]=$g[144]
				$stack[$fp+4]=$g[134].value
				$pc = 108
			case 108:
				$pc = 109
			case 109:
				$pc = 111
				continue
			case 110:
				$stack[$fp+1]=$g[144]
				$stack[$fp+4]=$g[134].value
				$pc = 111
			case 111:
				$pc = 112
			case 112:
				if (!(instrOpTypeRs2($g[133].vIns)==OP_TYPE_IMM)) {
					$pc = 113
					continue
				}
				$stack[$fp+2]=$g[146]
				$stack[$fp+5]=$g[133].vRs2
				$pc = 120
				continue
			case 113:
				if (!($g[29]==ALU_FORWARDING && $g[133].vIns!=BL)) {
					$pc = 118
					continue
				}
				if (!($g[157].tagMatches($g[133].vRs2))) {
					$pc = 114
					continue
				}
				$stack[$fp+2]=$g[149]
				$stack[$fp+5]=$g[157].value
				$pc = 117
				continue
			case 114:
				if (!($g[168].tagMatches($g[133].vRs2))) {
					$pc = 115
					continue
				}
				$stack[$fp+2]=$g[148]
				$stack[$fp+5]=$g[168].value
				$pc = 116
				continue
			case 115:
				$stack[$fp+2]=$g[145]
				$stack[$fp+5]=$g[135].value
				$pc = 116
			case 116:
				$pc = 117
			case 117:
				$pc = 119
				continue
			case 118:
				$stack[$fp+2]=$g[145]
				$stack[$fp+5]=$g[135].value
				$pc = 119
			case 119:
				$pc = 120
			case 120:
				if (!(instrOpTypeRs3($g[133].vIns)==OP_TYPE_IMM)) {
					$pc = 121
					continue
				}
				$stack[$fp+6]=$g[133].vRs3
				$pc = 128
				continue
			case 121:
				if (!($g[29]==ALU_FORWARDING && $g[133].vIns!=BL)) {
					$pc = 126
					continue
				}
				if (!($g[157].tagMatches($g[133].vRs3))) {
					$pc = 122
					continue
				}
				$stack[$fp+6]=$g[157].value
				$pc = 125
				continue
			case 122:
				if (!($g[168].tagMatches($g[133].vRs3))) {
					$pc = 123
					continue
				}
				$stack[$fp+6]=$g[168].value
				$pc = 124
				continue
			case 123:
				$stack[$fp+6]=$g[100][$g[133].vRs3].value
				$pc = 124
			case 124:
				$pc = 125
			case 125:
				$pc = 127
				continue
			case 126:
				$stack[$fp+2]=$g[145]
				$stack[$fp+6]=$g[100][$g[133].vRs3].value
				$pc = 127
			case 127:
				$pc = 128
			case 128:
				$stack[$fp+7] = instrExecute($g[133].vIns, $g[133].vSBit, $g[133].vCond, $stack[$fp+4], $stack[$fp+5], $g[133].vIns2, $stack[$fp+6], $g[101].n, $g[101].z, $g[101].c, $g[101].v)
				if (!(instrIsLoadOrStore($g[133].vIns))) {
					$pc = 129
					continue
				}
				$g[157].setNewTag(-1)
				$pc = 132
				continue
			case 129:
				if (!($g[133].vIns==BL)) {
					$pc = 130
					continue
				}
				$g[157].setNewTag(14)
				$pc = 131
				continue
			case 130:
				$g[157].setNewTag($g[133].vRdt)
				$pc = 131
			case 131:
				$pc = 132
			case 132:
				if (!(testCondition($g[133].vCond))) {
					$pc = 133
					continue
				}
				$g[157].setNewValue($stack[$fp+7])
				$pc = 134
				continue
			case 133:
				$g[157].setNewTag(-2)
				$pc = 134
			case 134:
				$g[157].setInvalid(0)
				$pc = 137
				continue
			case 135:
				if (!($g[133].vIns==NOP || !testCondition($g[133].vCond))) {
					$pc = 136
					continue
				}
				$g[157].setInvalid(1)
				$pc = 136
			case 136:
				$pc = 137
			case 137:
				if (!(($g[133].vIns==STR))) {
					$pc = 144
					continue
				}
				if (!($g[30]==FORWARDING_TO_SMDR)) {
					$pc = 142
					continue
				}
				if (!($g[157].tagMatches($g[133].vRdt))) {
					$pc = 138
					continue
				}
				$stack[$fp+3]=$g[150]
				$g[158].setNewValue($g[157].value)
				$pc = 141
				continue
			case 138:
				if (!($g[168].tagMatches($g[133].vRdt))) {
					$pc = 139
					continue
				}
				$stack[$fp+3]=$g[151]
				$g[158].setNewValue($g[168].value)
				$pc = 140
				continue
			case 139:
				$stack[$fp+3]=$g[152]
				$g[158].setNewValue($g[100][$g[133].vRdt].value)
				$pc = 140
			case 140:
				$pc = 141
			case 141:
				$pc = 143
				continue
			case 142:
				$stack[$fp+3]=$g[152]
				$g[158].setNewValue($g[100][$g[133].vRdt].value)
				$pc = 143
			case 143:
				$pc = 144
			case 144:
				if (wait(8))
				return
				$pc = 145
			case 145:
				fork(37, $g[141], 64)
				if (!(($g[133].vIns==STR))) {
					$pc = 146
					continue
				}
				fork(37, $stack[$fp+3], 24)
				$pc = 146
			case 146:
				if (!(instrOpTypeRdt($g[133].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[133].vIns) || instrHasNoDstRI($g[133].vIns))) {
					$pc = 150
					continue
				}
				if (!($stack[$fp+1]!=0 && (instrOpTypeRs1($g[133].vIns)!=OP_TYPE_UNUSED))) {
					$pc = 147
					continue
				}
				fork(37, $stack[$fp+1], 24)
				$pc = 147
			case 147:
				if (!($stack[$fp+2]==$g[146])) {
					$pc = 148
					continue
				}
				$g[147].setTxt("%02X", $stack[$fp+5])
				$g[147].setOpacity(1)
				$pc = 148
			case 148:
				if (!(instrOpTypeRs2($g[133].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 149
					continue
				}
				fork(37, $stack[$fp+2], 24)
				$pc = 149
			case 149:
				$pc = 150
			case 150:
				if (wait(24))
				return
				$pc = 151
			case 151:
				if (!(($g[133].vIns==STR))) {
					$pc = 152
					continue
				}
				fork(37, $g[153], 40)
				$pc = 152
			case 152:
				if (!(instrOpTypeRdt($g[133].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[133].vIns) || instrHasNoDstRI($g[133].vIns))) {
					$pc = 156
					continue
				}
				$g[139].setTxtOp($g[133].vIns)
				if (!($stack[$fp+1]!=0 && (instrOpTypeRs1($g[133].vIns)!=OP_TYPE_UNUSED))) {
					$pc = 153
					continue
				}
				fork(37, $g[154], 40)
				$pc = 153
			case 153:
				if (!(instrOpTypeRs2($g[133].vIns)!=OP_TYPE_UNUSED)) {
					$pc = 154
					continue
				}
				fork(37, $g[155], 40)
				$pc = 154
			case 154:
				if (wait(20))
				return
				$pc = 155
			case 155:
				$g[139].txtResult.setTxt("%02X", $stack[$fp+7])
				$g[139].txtResult.setOpacity(1, 20, 1, 0)
				$pc = 156
			case 156:
				if (!($g[133].vIns==NOP || !testCondition($g[133].vCond))) {
					$pc = 158
					continue
				}
				if (wait(40))
				return
				$pc = 157
			case 157:
				$g[157].updateLabel()
				$pc = 158
			case 158:
				returnf(0)
				continue
			case 159:
				enterf(0);	// maExec
				if (!($g[23]==MUL_STALL)) {
					$pc = 160
					continue
				}
				$g[156].setNewValue(STALL, " ", 0, 0, 0, 0, STALL, 0)
				$pc = 160
			case 160:
				if (!($g[157].tag==-2)) {
					$pc = 161
					continue
				}
				$g[168].setNewTag(-2)
				$pc = 161
			case 161:
				fork(33, $g[156])
				if (!(instrOpTypeRdt($g[156].nIns)==OP_TYPE_REG || instrHasNoDstRR($g[156].vIns) || instrHasNoDstRI($g[156].vIns) || $g[133].vIns==BL)) {
					$pc = 162
					continue
				}
				fork(35, $g[157])
				$pc = 162
			case 162:
				if (!($g[156].nIns==STR)) {
					$pc = 163
					continue
				}
				fork(35, $g[158])
				$pc = 163
			case 163:
				if (wait(8))
				return
				$pc = 164
			case 164:
				$g[167].setNewValue($g[156].vIns, $g[156].vSBit, $g[156].vCond, $g[156].vRdt, $g[156].vRs1, $g[156].vRs2, $g[156].vIns2, $g[156].vRs3)
				if (!((instrOpTypeRdt($g[156].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[156].vIns) || instrHasNoDstRI($g[156].vIns) || $g[133].vIns==BL) && ($g[156].vIns!=STR))) {
					$pc = 168
					continue
				}
				if (!(($g[156].vIns==LDR))) {
					$pc = 166
					continue
				}
				$g[168].setNewValue($g[159][$g[157].value%4].value)
				if (!($g[168].tag!=-2)) {
					$pc = 165
					continue
				}
				$g[168].setNewTag($g[156].vRdt)
				$pc = 165
			case 165:
				$pc = 167
				continue
			case 166:
				$g[168].setNewValue($g[157].value)
				$g[168].setNewTag($g[157].tag)
				$pc = 167
			case 167:
				$g[168].setInvalid(0)
				$pc = 168
			case 168:
				if (wait(8))
				return
				$pc = 169
			case 169:
				fork(37, $g[161], 64)
				if (!(($g[156].vIns==STR) && ($g[157].tag!=-2))) {
					$pc = 172
					continue
				}
				$g[159][$g[157].value%4].setNewValue($g[158].value)
				fork(37, $g[165], 24)
				callf(37, $g[164], 24)
				continue
			case 170:
				callf(35, $g[159][$g[157].value%4])
				continue
			case 171:
				$pc = 180
				continue
			case 172:
				if (!(instrOpTypeRdt($g[156].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[156].vIns) || instrHasNoDstRI($g[156].vIns) || $g[133].vIns==BL)) {
					$pc = 179
					continue
				}
				if (!(($g[156].vIns==LDR) && ($g[157].tag!=-2))) {
					$pc = 175
					continue
				}
				callf(37, $g[164], 24)
				continue
			case 173:
				$g[159][$g[157].value%4].highlight($g[21])
				callf(37, $g[166], 24)
				continue
			case 174:
				$pc = 177
				continue
			case 175:
				callf(37, $g[162], 48)
				continue
			case 176:
				$pc = 177
			case 177:
				callf(37, $g[163], 16)
				continue
			case 178:
				$pc = 179
			case 179:
				$pc = 180
			case 180:
				if (!($g[156].vIns==NOP || !testCondition($g[156].vCond))) {
					$pc = 182
					continue
				}
				if (wait(64))
				return
				$pc = 181
			case 181:
				$g[168].setInvalid(1)
				$g[168].updateLabel()
				$pc = 182
			case 182:
				returnf(0)
				continue
			case 183:
				enterf(0);	// wbExec
				fork(33, $g[167])
				if (!((instrOpTypeRdt($g[167].nIns)==OP_TYPE_REG || instrHasNoDstRR($g[167].vIns) || instrHasNoDstRI($g[167].vIns) || $g[156].vIns==BL) && ($g[167].nIns!=STR))) {
					$pc = 184
					continue
				}
				fork(35, $g[168])
				$pc = 184
			case 184:
				if (wait(8))
				return
				$pc = 185
			case 185:
				if (!((instrOpTypeRdt($g[167].vIns)==OP_TYPE_REG || instrHasNoDstRR($g[167].vIns) || instrHasNoDstRI($g[167].vIns) || $g[156].vIns==BL) && ($g[167].vIns!=STR) && ($g[168].tag!=-2))) {
					$pc = 190
					continue
				}
				$g[100][$g[168].tag].setNewValue($g[168].value)
				if (wait(8))
				return
				$pc = 186
			case 186:
				callf(37, $g[169], 24)
				continue
			case 187:
				callf(35, $g[100][$g[168].tag])
				continue
			case 188:
				if (wait(19))
				return
				$pc = 189
			case 189:
				$pc = 192
				continue
			case 190:
				if (wait(67))
				return
				$pc = 191
			case 191:
				$pc = 192
			case 192:
				if (!($g[167].vIns!=STALL && $g[167].vIns!=EMPTY)) {
					$pc = 193
					continue
				}
				$g[33]++
				$g[73].setTxt("%4d", $g[33])
				$pc = 193
			case 193:
				$g[34]++
				$g[74].setTxt("%4d", $g[34])
				returnf(0)
				continue
			case 194:
				enterf(0);	// nonPipelinedBranch
				fork(37, $g[116], 24)
				fork(37, $g[117], 24)
				callf(37, $g[95], 12)
				continue
			case 195:
				fork(37, $g[114], 12)
				fork(37, $g[115], 12)
				if (wait(12))
				return
				$pc = 196
			case 196:
				if (!(instrIsBranch($g[98].vIns))) {
					$pc = 202
					continue
				}
				if (!(($g[100][$g[98].vRs1].value==0)==($g[98].vIns==B))) {
					$pc = 198
					continue
				}
				callf(37, $g[121], 20)
				continue
			case 197:
				$g[78].setNewValue(($g[78].value+$g[98].vRs2)&127)
				$pc = 200
				continue
			case 198:
				callf(37, $g[119], 20)
				continue
			case 199:
				$g[78].setNewValue(($g[78].value+4)&127)
				$pc = 200
			case 200:
				callf(37, $g[88], 14)
				continue
			case 201:
				$pc = 205
				continue
			case 202:
				$g[78].setNewValue(($g[78].value+4)&127)
				callf(37, $g[119], 20)
				continue
			case 203:
				callf(37, $g[88], 14)
				continue
			case 204:
				$pc = 205
			case 205:
				callf(37, $g[92], 6)
				continue
			case 206:
				returnf(0)
				continue
			case 207:
				enterf(5);	// execNonPipelined
				callf(35, $g[78])
				continue
			case 208:
				$g[76].setActive($g[78].newValue)
				callf(37, $g[87], 24)
				continue
			case 209:
				callf(37, $g[85], 40)
				continue
			case 210:
				$g[98].setNewInstruction($g[76].instruction[$g[78].value/4])
				$g[86].setTxt($g[98].getNewInstrTxt())
				$g[86].translate(60/2+70, 0, 20, 1, 0)
				callf(33, $g[98])
				continue
			case 211:
				if (!((instrOpTypeRs2($g[98].vIns)==OP_TYPE_IMM) && (instrOpTypeRdt($g[98].vIns)==OP_TYPE_REG))) {
					$pc = 212
					continue
				}
				fork(37, $g[97], 64)
				$pc = 212
			case 212:
				fork(194, $obj)
				if (wait(24))
				return
				$pc = 213
			case 213:
				if (!(instrOpTypeRdt($g[98].vIns)==OP_TYPE_REG)) {
					$pc = 224
					continue
				}
				$stack[$fp+1]=$g[100][$g[98].vRs1].value
				if (!(instrOpTypeRs1($g[98].vRs1!=OP_TYPE_IMM))) {
					$pc = 214
					continue
				}
				$g[100][$g[98].vRs1].highlight($g[21])
				$pc = 214
			case 214:
				$g[132].setTxt("R%d:%02X", $g[98].vRs1, $g[100][$g[98].vRs1].value)
				$g[132].setOpacity(1)
				fork(37, $g[131], 40)
				if (!((instrOpTypeRs2($g[98].vIns)==OP_TYPE_REG) || ($g[98].vIns==STR))) {
					$pc = 221
					continue
				}
				if (!(instrOpTypeRs2($g[98].vIns)==OP_TYPE_IMM)) {
					$pc = 216
					continue
				}
				$stack[$fp+2]=$g[100][$g[98].vRdt].value
				if (!(instrOpTypeRdt($g[98].vIns!=OP_TYPE_UNUSED))) {
					$pc = 215
					continue
				}
				$g[100][$g[98].vRdt].highlight($g[21])
				$pc = 215
			case 215:
				$pc = 217
				continue
			case 216:
				$stack[$fp+2]=$g[100][$g[98].vRs2].value
				$g[100][$g[98].vRs2].highlight($g[21])
				$pc = 217
			case 217:
				if (!((!instrIsArRI($g[98].vIns)) && ($g[98].vIns!=LDR))) {
					$pc = 220
					continue
				}
				$stack[$fp+5] = ($g[98].vIns==STR) ? $g[98].vRdt : $g[98].vRs2
				$g[130].setTxt("R%d:%02X", $stack[$fp+5], $g[100][$stack[$fp+5]].value)
				$g[130].setOpacity(1)
				callf(37, $g[129], 20)
				continue
			case 218:
				callf(37, $g[128], 20)
				continue
			case 219:
				$pc = 220
			case 220:
				$pc = 223
				continue
			case 221:
				if (wait(40))
				return
				$pc = 222
			case 222:
				$pc = 223
			case 223:
				$pc = 226
				continue
			case 224:
				if (wait(40))
				return
				$pc = 225
			case 225:
				$pc = 226
			case 226:
				if (!(instrOpTypeRdt($g[98].vIns)==OP_TYPE_REG)) {
					$pc = 227
					continue
				}
				$g[139].setTxtOp($g[98].vIns)
				$pc = 227
			case 227:
				if (!($g[98].vIns==STR)) {
					$pc = 230
					continue
				}
				fork(37, $g[152], 40)
				fork(37, $g[144], 40)
				$g[147].setTxt("%02X", $g[98].vRs2)
				$g[147].setOpacity(1)
				callf(37, $g[146], 40)
				continue
			case 228:
				fork(37, $g[153], 40)
				fork(37, $g[155], 40)
				callf(37, $g[154], 40)
				continue
			case 229:
				$stack[$fp+4]=$g[100][$g[98].vRdt].value
				$stack[$fp+3]=instrExecute($g[98].vIns, $g[98].vSBit, $g[98].vCond, $stack[$fp+1], $g[98].vRs2, $g[98].vIns2, $g[98].vRs3, $g[101].n, $g[101].z, $g[101].c, $g[101].v)
				$pc = 239
				continue
			case 230:
				if (!(instrOpTypeRdt($g[98].vIns)==OP_TYPE_REG)) {
					$pc = 236
					continue
				}
				fork(37, $g[144], 40)
				if (!(instrOpTypeRs2($g[98].vIns)==OP_TYPE_IMM)) {
					$pc = 232
					continue
				}
				$g[147].setTxt("%02X", $g[98].vRs2)
				$g[147].setOpacity(1)
				callf(37, $g[146], 40)
				continue
			case 231:
				$stack[$fp+3]=instrExecute($g[98].vIns, $g[98].vSBit, $g[98].vCond, $stack[$fp+1], $g[98].vRs2, $g[98].vIns2, $g[98].vRs3, $g[101].n, $g[101].z, $g[101].c, $g[101].v)
				$pc = 234
				continue
			case 232:
				callf(37, $g[145], 40)
				continue
			case 233:
				$stack[$fp+3]=instrExecute($g[98].vIns, $g[98].vSBit, $g[98].vCond, $stack[$fp+1], $stack[$fp+2], $g[98].vIns2, $g[98].vRs3, $g[101].n, $g[101].z, $g[101].c, $g[101].v)
				$pc = 234
			case 234:
				fork(37, $g[155], 40)
				callf(37, $g[154], 40)
				continue
			case 235:
				$pc = 238
				continue
			case 236:
				if (wait(80))
				return
				$pc = 237
			case 237:
				$pc = 238
			case 238:
				$pc = 239
			case 239:
				if (!($g[98].vIns==LDR)) {
					$pc = 243
					continue
				}
				callf(37, $g[164], 20)
				continue
			case 240:
				$g[159][($stack[$fp+3])%4].highlight($g[21])
				callf(37, $g[166], 20)
				continue
			case 241:
				callf(37, $g[163], 40)
				continue
			case 242:
				$stack[$fp+3]=$g[159][($stack[$fp+3])%4].value
				$pc = 253
				continue
			case 243:
				if (!($g[98].vIns==STR)) {
					$pc = 246
					continue
				}
				fork(37, $g[165], 20)
				callf(37, $g[164], 20)
				continue
			case 244:
				$g[159][($stack[$fp+3])%4].setNewValue($stack[$fp+4])
				callf(35, $g[159][($stack[$fp+3])%4])
				continue
			case 245:
				$pc = 252
				continue
			case 246:
				if (!(instrOpTypeRdt($g[98].vIns)==OP_TYPE_REG)) {
					$pc = 249
					continue
				}
				callf(37, $g[162], 40)
				continue
			case 247:
				callf(37, $g[163], 40)
				continue
			case 248:
				$pc = 251
				continue
			case 249:
				if (wait(80))
				return
				$pc = 250
			case 250:
				$pc = 251
			case 251:
				$pc = 252
			case 252:
				$pc = 253
			case 253:
				$g[100][0].unHighlight()
				$g[100][1].unHighlight()
				$g[100][2].unHighlight()
				$g[100][3].unHighlight()
				if (!((instrOpTypeRdt($g[98].vIns)==OP_TYPE_REG) && ($g[98].vIns!=STR))) {
					$pc = 257
					continue
				}
				callf(37, $g[169], 40)
				continue
			case 254:
				$g[100][$g[98].vRdt].setNewValue($stack[$fp+3])
				callf(35, $g[100][$g[98].vRdt])
				continue
			case 255:
				if (wait(19))
				return
				$pc = 256
			case 256:
				$pc = 259
				continue
			case 257:
				if (wait(75))
				return
				$pc = 258
			case 258:
				$pc = 259
			case 259:
				$g[34]+=5
				$g[33]++
				$g[73].setTxt("%4d", $g[33])
				$g[74].setTxt("%4d", $g[34])
				returnf(0)
				continue
			case 260:
				enterf(0);	// exec
				$g[100][0].unHighlight()
				$g[100][1].unHighlight()
				$g[100][2].unHighlight()
				$g[100][3].unHighlight()
				$g[159][0].unHighlight()
				$g[159][1].unHighlight()
				$g[159][2].unHighlight()
				$g[159][3].unHighlight()
				$g[80][0].unHighlight()
				$g[80][1].unHighlight()
				$g[81][0].unHighlight()
				$g[81][1].unHighlight()
				if (!($g[26]==PIPELINING_ENABLED)) {
					$pc = 261
					continue
				}
				fork(48, $obj)
				fork(69, $obj)
				fork(101, $obj)
				fork(159, $obj)
				fork(183, $obj)
				$pc = 262
				continue
			case 261:
				fork(207, $obj)
				$pc = 262
			case 262:
				if (wait(8))
				return
				$pc = 263
			case 263:
				resetWires()
				if (wait(($g[26]==PIPELINING_ENABLED) ? 72 : 392))
				return
				$pc = 264
			case 264:
				checkPoint()
				returnf(0)
				continue
			case 265:
				enterf(0);	// run
				if (wait(1))
				return
				$pc = 266
			case 266:
				$g[32]=1
				setlocked()
				$pc = 267
			case 267:
				if (!(1)) {
					$pc = 272
					continue
				}
				fork(43, $g[77], ($g[26]==PIPELINING_ENABLED) ? 80 : 400)
				callf(260, $obj)
				continue
			case 268:
				if (!((($g[167].vIns==HALT) && ($g[26]==PIPELINING_ENABLED)) || (($g[98].vIns==HALT) && ($g[26]==PIPELINING_DISABLED)))) {
					$pc = 270
					continue
				}
				stop()
				if (!($g[173])) {
					$pc = 269
					continue
				}
				$pc = 272
				continue
				$pc = 269
			case 269:
				$pc = 270
			case 270:
				if (wait(1))
				return
				$pc = 271
			case 271:
				$pc = 267
				continue
			case 272:
				returnf(0)
				continue
			}
		}
	}

	this.getThread = function() { return $thread; };
	this.execute = execute;
	this.resumeThread = resumeThread;
	this.suspendThread = suspendThread;
	this.waitTracker = waitTracker;

}

// eof
