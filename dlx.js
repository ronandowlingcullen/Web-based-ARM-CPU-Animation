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
	const WIDTH = 2200
	const HEIGHT = 1080
	const maxexample = 5
	const NO_STALL = 0
	const DATA_STALL = 1
	const CTRL_STALL = 2
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
	const MAX_INSTR = 54
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
	const MULi = 22
	const ANDi = 23
	const ORRi = 24
	const EORi = 25
	const BICi = 26
	const LSLi = 27
	const LSRi = 28
	const ASRi = 29
	const RORi = 30
	const CMN = 31
	const CMP = 32
	const TEQ = 33
	const TST = 34
	const CMNi = 35
	const CMPi = 36
	const TEQi = 37
	const TSTi = 38
	const MOV = 39
	const MVN = 40
	const LDR = 41
	const STR = 42
	const SWP = 43
	const MOVi = 44
	const MVNi = 45
	const LDRi = 46
	const STRi = 47
	const B = 48
	const BL = 49
	const Bi = 50
	const BLi = 51
	const HALT = 52
	const STALL = 53
	const EMPTY = 54
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
		return (instr>=B && instr<=BLi) ? 1 : 0
	}

	function instrIsLoadOrStore(instr) {
		return ((instr==LDR) || (instr==STR)) ? 1 : 0
	}

	function instrIsShI(instr) {
		return (instr>=LSLi && instr<=RORi) ? 1 : 0
	}

	function instrHasNoDstRR(instr) {
		return ((instr>=CMN && instr<=TST) || (instr>=MOV && instr<=SWP) || instrIsBranch(instr)) ? 1 : 0
	}

	function instrHasNoDstRI(instr) {
		return ((instr>=CMNi && instr<=TSTi) || (instr>=MOVi && instr<=STRi) || instrIsBranch(instr)) ? 1 : 0
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
		if (instr==Bi || instr==BLi)
		return OP_TYPE_IMM
		else 
		return OP_TYPE_REG
	}

	function instrOpTypeRs2(instr) {
		if (instrIsNop(instr) || instrIsBranch(instr))
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

	function instrText(instr, rdt, rs1, rs2, instr2, rs3) {
		if (instrIsNop(instr))
		return sprintf("%s", $g[35][instr])
		else 
		if (instrIsArRR(instr))
		return sprintf("%s R%d,R%d,R%d", $g[35][instr], rdt, rs1, rs2)
		else 
		if (instrIsArRI(instr))
		return sprintf("%s R%d,R%d,%02X", $g[35][instr], rdt, rs1, rs2)
		else 
		if (instr==LDR)
		return sprintf("LDR R%d,R%d+%02X", rdt, rs1, rs2)
		else 
		if (instr==STR)
		return sprintf("STR R%d,R%d+%02X", rdt, rs1, rs2)
		else 
		if (instrIsBranch(instr))
		return sprintf("%s R%d,%02X", $g[35][instr], rs1, rs2)
		else 
		if (instr==B)
		return sprintf("%s %02X", $g[35][instr], rs2)
		else 
		if (instr==BL)
		return sprintf("%s R%d, %02X", $g[35][instr], rdt, rs2)
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
		if (((op1&128)==(op2&128)) && ((res&128)!=(op1&128)))
		return 1
		else 
		return 0
	}

	function isSubV(op1, op2, res) {
		if (((op1&128)!=(op2&128)) && ((res&128)!=(op1&128)))
		return 1
		else 
		return 0
	}

	function instrExecute(instr, op1, op2, n, z, c, v) {
		let res = 0
		if (instr==ADD || instr==ADDi)
		return (se8(op1)+se8(op2))&255
		else 
		if (instr==SUB || instr==SUBi)
		return (se8(op1)-se8(op2))&255
		else 
		if (instr==AND || instr==ANDi)
		return op1&op2
		else 
		if (instr==ORR || instr==ORRi)
		return op1|op2
		else 
		if (instr==EOR || instr==EORi)
		return op1^op2
		else 
		if (instr==LSL || instr==LSLi)
		return (op1<<op2)&255
		else 
		if (instr==LSR || instr==LSRi)
		return (op1>>op2)&255
		else 
		if (instr==LDR || instr==LDRi || instr==STR || instr==STRi)
		return (se8(op1)+se8(op2))&255
		else 
		if (instr==ADC || instr==ADCi)
		return (se8(op1)+se8(op2)+c)&255
		else 
		if (instr==BIC || instr==BICi)
		return (op1&(~op2))
		else 
		if (instr==CMN || instr==CMNi) {
			res=se8(op1)+se8(op2)
			$g[98].setNValue(isN(res))
			$g[98].setZValue(isZ(res))
			$g[98].setCValue(isAddC(se8(op1), se8(op2)))
			$g[98].setVValue(isAddV(se8(op1), se8(op2), res))
		} else
		if (instr==CMP || instr==CMPi) {
			res=se8(op1)-se8(op2)
			$g[98].setNValue(isN(res))
			$g[98].setZValue(isZ(res))
			$g[98].setCValue(isSubC(se8(op1), se8(op2)))
			$g[98].setVValue(isSubV(se8(op1), se8(op2), res))
		} else
		if (instr==RSB || instr==RSBi)
		return (se8(op2)-se8(op1))&255
		else 
		if (instr==RSC || instr==RSCi)
		return (se8(op2)-se8(op1)-1+c)&255
		else 
		if (instr==SBC || instr==SBCi)
		return (se8(op1)-se8(op2)-1+c)&255
		else 
		if (instr==ASR || instr==ASRi) {
			let neg = op1>>7
			if (op2>8)
			op2=8
			if (neg) {
				op1=op1^65280
			}
			return (op1>>op2)&255
		} else
		if (instr==ROR || instr==RORi) {
			op2=op2%8
			let newLeftPart = (op1<<(8-op2))&255
			let newRightPart = (op1>>op2)&255
			return newLeftPart+newRightPart
		} else
		if (instr==TEQ || instr==TEQi) {
			res=se8(op1)^se8(op2)
			$g[98].setNValue(isN(res))
			$g[98].setZValue(isZ(res))
			$g[98].setCValue(isAddC(se8(op1), se8(op2)))
			$g[98].setVValue(isAddV(se8(op1), se8(op2), res))
		} else
		if (instr==TST || instr==TSTi) {
			res=se8(op1)&se8(op2)
			$g[98].setNValue(isN(res))
			$g[98].setZValue(isZ(res))
			$g[98].setCValue(isAddC(se8(op1), se8(op2)))
			$g[98].setVValue(isAddV(se8(op1), se8(op2), res))
		} else
		if (instr==B || instr==BL)
		return op2
		else 
		return 238
	}

	function Instruction(_x, _y, _w, _h, _addr) {
		VObj.call(this)
		this.x = _x
		this.y = _y
		this.w = _w
		this.h = _h
		this.addr = _addr
		this.vIns = 0, this.vIns2 = 0, this.vRdt = 0, this.vRs1 = 0, this.vRs2 = 0, this.vRs3 = 0
		this.opTypeRdt = 0, this.opTypeRs1 = 0, this.opTypeRs2 = 0, this.opTypeRs3 = 0
		this.clk
		this.fw = this.w/8
		this.insPen = new SolidPen(0, 0, BLACK)
		this.rdtPen = new SolidPen(0, 0, BLACK)
		this.rs1Pen = new SolidPen(0, 0, BLACK)
		this.rs2Pen = new SolidPen(0, 0, BLACK)
		this.ins2Pen = new SolidPen(0, 0, BLACK)
		this.rs3Pen = new SolidPen(0, 0, BLACK)
		this.brush = new SolidBrush(WHITE)
		this.adr = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x, this.y, this.fw, this.h, 0, $g[15], "%02X", this.addr)
		this.ins = new Rectangle2($g[0], $g[17], HLEFT, 0, this.brush, this.x+this.fw, this.y, 2*this.fw, this.h, this.insPen, $g[15], " NOP")
		this.rdt = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+2.5*this.fw, this.y, this.fw, this.h, this.rdtPen, $g[15], "-")
		this.rs1 = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+3.5*this.fw, this.y, this.fw, this.h, this.rs1Pen, $g[15], "-")
		this.rs2 = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+4.5*this.fw, this.y, this.fw, this.h, this.rs2Pen, $g[15], "-")
		this.ins2 = new Rectangle2($g[0], $g[17], HLEFT, 0, this.brush, this.x+5.5*this.fw, this.y, 2*this.fw, this.h, this.insPen, $g[15], " NOP")
		this.rs3 = new Rectangle2($g[0], $g[17], 0, 0, this.brush, this.x+7*this.fw, this.y, this.fw, this.h, this.rs2Pen, $g[15], "-")
		this.dot = new Rectangle2($g[0], $g[17], 0, 0, $g[11], this.x+this.fw*0.80000000000000004, this.y+2, this.h/2, this.h/2)
		this.dot.setOpacity(0)
		this.arrowDown = new Line($g[0], $g[17], 0, $g[39], 0, 0, this.x+this.w+2, this.y+this.h*0.5, 5, 0, 0, 0, 0, 0)
		this.arrowUp = new Line($g[0], $g[17], 0, $g[39], 0, 0, this.x-2, this.y+this.h*0.5, -5, 0, 0, 0, 0, 0)
		this.arrowDown.setOpacity(0)
		this.arrowUp.setOpacity(0)
		this.adr.addEventHandler("eventEE", this, this.$eh0)
		this.ins.addEventHandler("eventEE", this, this.$eh1)
		this.ins2.addEventHandler("eventEE", this, this.$eh2)
		this.rdt.addEventHandler("eventEE", this, this.$eh3)
		this.rs1.addEventHandler("eventEE", this, this.$eh4)
		this.rs2.addEventHandler("eventEE", this, this.$eh5)
		this.rs3.addEventHandler("eventEE", this, this.$eh6)
		this.ins.addEventHandler("eventMB", this, this.$eh7)
		this.ins2.addEventHandler("eventMB", this, this.$eh8)
		this.rdt.addEventHandler("eventMB", this, this.$eh9)
		this.rs1.addEventHandler("eventMB", this, this.$eh10)
		this.rs2.addEventHandler("eventMB", this, this.$eh11)
		this.rs3.addEventHandler("eventMB", this, this.$eh12)
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
		this.ins2Pen.setRGBA(enter ? RED : BLACK)
		return 0
	}

	Instruction.prototype.$eh3 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRdt!=OP_TYPE_UNUSED) {
			this.rdtPen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rdtPen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh4 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs1!=OP_TYPE_UNUSED) {
			this.rs1Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs1Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh5 = function(enter, $1, $2) {
		this.brush.setSolid(enter ? MARINE : WHITE)
		if (this.opTypeRs2!=OP_TYPE_UNUSED) {
			this.rs2Pen.setRGBA(enter ? RED : BLACK)
		} else {
			this.rs2Pen.setRGBA(BLACK)
		}
		return 0
	}

	Instruction.prototype.$eh6 = function(enter, $1, $2) {
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
		this.ins.setTxt("%c%s", 32, $g[35][this.vIns])
		this.ins2.setTxt("%c%s", 32, $g[35][this.vIns2])
		this.opTypeRdt=instrOpTypeRdt(this.vIns)
		this.opTypeRs1=instrOpTypeRs1(this.vIns)
		this.opTypeRs2=instrOpTypeRs2(this.vIns)
		this.opTypeRs3=instrOpTypeRs3(this.vIns2)
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
			this.rs1.setTxt("%02X", this.vRs1)
		} else {
			this.rs1.setTxt("R%d", this.vRs1)
		}
		if (this.opTypeRs2==OP_TYPE_UNUSED)
		this.rs2.setTxt("-")
		else 
		if (this.opTypeRs2==OP_TYPE_REG)
		this.rs2.setTxt("R%d", this.vRs2)
		else 
		this.rs2.setTxt("%02X", this.vRs2)
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

	Instruction.prototype.$eh7 = function(down, flags, x, y) {
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

	Instruction.prototype.$eh8 = function(down, flags, x, y) {
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

	Instruction.prototype.$eh9 = function(down, flags, x, y) {
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

	Instruction.prototype.$eh10 = function(down, flags, x, y) {
		if (!$g[22] && down && this.opTypeRdt!=OP_TYPE_UNUSED) {
			if (flags&MB_LEFT) {
				this.vRs1=(this.vRs1==15) ? 0 : this.vRs1+1
			} else
			if (flags&MB_RIGHT)
			this.vRs1=(this.vRs1==0) ? 15 : this.vRs1-1
			this.initRegs(1)
		}
		return 0
	}

	Instruction.prototype.$eh11 = function(down, flags, x, y) {
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

	Instruction.prototype.$eh12 = function(down, flags, x, y) {
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
		this.ih = (h-4)/32
		this.instruction = newArray(32)
		this.active = 31
		this.r = new Rectangle2($g[0], 0, 0, $g[1], $g[36], x, y, w, h)
		this.r.setRounded(2, 2)
		new Rectangle2($g[0], 0, 0, $g[1], $g[37], x+2, y+2, w-4, h-4)
		for (this.lp1 = 0; this.lp1<32; this.lp1++)
		this.instruction[this.lp1]=new Instruction(x+2, y+2+this.lp1*this.ih, w-4, this.ih, this.lp1*4)
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
		this.vIns = EMPTY, this.vRdt = 0, this.vRs1 = 0, this.vRs2 = 0, this.vIns2 = EMPTY, this.vRs3 = 0
		this.nIns = EMPTY, this.nRdt = 0, this.nRs1 = 0, this.nRs2 = 0, this.nIns2 = EMPTY, this.nRs3 = 0
		this.txt = "EMPTY"
		this.r1 = new Rectangle2($g[0], 0, 0, $g[1], $g[5], x, y, w, h)
		this.r1.setRounded(2, 2)
		this.r2 = new Rectangle2($g[0], 0, 0, $g[1], $g[12], x+5, y+4, w-11, h-31)
		this.r2.setRounded(2, 2)
		this.r3 = new Rectangle2($g[0], 0, 0, 0, 0, x, y+h-22, w, 22, $g[4], $g[15], caption)
		this.label = new Txt($g[0], $g[17], 0, x+w/2, y+(h-31)/2, 0, $g[15], this.txt)
		this.label.rotate(-90)
	}
	InstructionRegister.prototype = Object.create(VObj.prototype)

	InstructionRegister.prototype.setNewValue = function(instr, rdt, rs1, rs2, instr2, rs3) {
		this.nIns=instr
		this.nRdt=rdt
		this.nRs1=rs1
		this.nRs2=rs2
		this.nIns2=instr2
		this.nRs3=rs3
	}

	InstructionRegister.prototype.setNewInstruction = function(i) {
		this.nIns=i.vIns
		this.nRdt=i.vRdt
		this.nRs1=i.vRs1
		this.nRs2=i.vRs2
		this.nIns2=i.vIns2
		this.nRs3=i.vRs3
	}

	InstructionRegister.prototype.getNewInstrTxt = function() {
		return instrText(this.nIns, this.nRdt, this.nRs1, this.nRs2, this.nIns2, this.nRs3)
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
		this.vRdt=this.vRs1=this.vRs2=this.vRs3=0
		this.nIns=EMPTY
		this.nIns2=EMPTY
		this.nRdt=this.nRs1=this.nRs2=this.nRs3=0
		this.txt=instrText(this.vIns, this.vRdt, this.vRs1, this.vRs2, this.nIns2, this.nRs3)
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
		this.r1 = new Rectangle2($g[0], 0, 0, $g[1], $g[40], x, y, w, h)
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
		this.label.addEventHandler("eventEE", this, this.$eh13)
		this.label.addEventHandler("eventMB", this, this.$eh14)
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

	Register.prototype.$eh13 = function(enter, x, y) {
		if (this.fixed==0)
		this.label.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	Register.prototype.$eh14 = function(down, flags, x, y) {
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
		this.bg = new Rectangle2($g[0], 0, 0, $g[1], $g[42], this.x, this.y, this.w, this.h)
		this.bg.setRounded(2, 2)
		this.label
		if (this.w>=this.h) {
			this.label=new Rectangle2($g[0], 0, 0, 0, 0, this.x, this.y, this.w, this.h, 0, $g[43], caption)
		} else {
			this.label=new Rectangle($g[0], 0, 0, 0, 0, this.x+this.w/2-3, this.y+this.h/2, -this.w/2, -this.h/2, this.w, this.h, 0, $g[43], caption)
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
		this.alu = new Polygon($g[0], 0, ABSOLUTE, $g[1], $g[42], x, y, 0, 0, w, h/4, w, 3*h/4, 0, h, 0, 5*h/8, w/2, h/2, 0, 3*h/8)
		new Rectangle2($g[0], 0, 0, 0, 0, x, y-10, w, 10, 0, $g[43], "ALU")
		this.op = ""
		this.txtOp = new Rectangle($g[0], $g[17], 0, 0, $g[11], x, y+h/2, 0, -h/12, 2*w/3, h/6, $g[4], $g[43], this.op)
		this.txtOp.setOpacity(0)
		this.txtOp.setRounded(2, 2)
		this.txtResult = new Rectangle($g[0], $g[19], 0, $g[1], $g[13], x+3*w/4, y+h/2, 0, -h/12, w/2, h/6, $g[1], $g[43])
		this.txtResult.setOpacity(0)
		this.txtResult.setRounded(2, 2)
	}
	ALU.prototype = Object.create(VObj.prototype)

	ALU.prototype.setTxtOp = function(vIns) {
		this.op=""
		if (vIns==ADD)
		this.op="ADD"
		else 
		if (vIns==SUB)
		this.op="SUB"
		else 
		if (vIns==AND)
		this.op="AND"
		else 
		if (vIns==ORR)
		this.op="OR"
		else 
		if (vIns==EOR)
		this.op="XOR"
		else 
		if (vIns==LSL)
		this.op="SLL"
		else 
		if (vIns==LSR)
		this.op="SRL"
		else 
		if (vIns==LDR || vIns==STR)
		this.op="ADD"
		else 
		if (vIns==BL)
		this.op="ADD"
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
		this.prev_clock = new Line(this, $g[19], 0, $g[44], -this.chw+this.chw/5, 3+this.ch, 0, 0, 0, -this.ch, this.chw, 0, 0, this.ch, this.chw, 0)
		this.next_clock = new Line(this, $g[19], 0, $g[45], this.chw+this.chw/5, 3+this.ch, 0, 0, 0, -this.ch, this.chw, 0, 0, this.ch, this.chw, 0)
		this.dot = new Rectangle2(this, $g[19], 0, 0, $g[5], w/2-3, h-6, 6, 6)
		this.canUpdate
	}
	AnimatedClock.prototype = Object.create(Group.prototype)

	AnimatedClock.prototype.setStall = function(s, t) {
		this.stall=s
		this.type=t
		if (this.canUpdate)
		this.prev_clock.setPen(this.stall ? (this.type ? $g[46] : $g[44]) : $g[45])
	}

	function Button(x, y, w, h, caption, ID) {
		VObj.call(this)
		this.label = new Rectangle2($g[0], 0, 0, $g[1], $g[47], x, y, w, h, $g[1], $g[15], caption)
		this.label.addEventHandler("eventEE", this, this.$eh15)
	}
	Button.prototype = Object.create(VObj.prototype)

	Button.prototype.$eh15 = function(enter, x, y) {
		this.label.setBrush(enter ? $g[48] : $g[47])
		return 0
	}

	Button.prototype.setCaption = function(caption) {
		this.label.setTxt(caption)
	}

	Button.prototype.showLocked = function(locked) {
		this.label.setFont(locked ? $g[16] : $g[15])
	}

	function CPSR(x, y, w, h) {
		VObj.call(this)
		this.n = 0
		this.z = 0
		this.c = 0
		this.v = 0
		this.nx = x
		this.zx = x+w/4
		this.cx = x+2*(w/4)
		this.vx = x+3*(w/4)
		this.ny = y+h/3
		this.zy = y+h/3
		this.cy = y+h/3
		this.vy = y+h/3
		this.outer = new Rectangle2($g[0], 0, 0, $g[1], $g[49], x, y, w+4, h)
		this.nLabel = new Rectangle($g[0], 0, 0, 0, 0, this.nx, y, 0, 0, w/4, h/3, 0, $g[43], "N")
		this.zLabel = new Rectangle($g[0], 0, 0, 0, 0, this.zx, y, 0, 0, w/4, h/3, 0, $g[43], "Z")
		this.cLabel = new Rectangle($g[0], 0, 0, 0, 0, this.cx, y, 0, 0, w/4, h/3, 0, $g[43], "C")
		this.vLabel = new Rectangle($g[0], 0, 0, 0, 0, this.vx, y, 0, 0, w/4, h/3, 0, $g[43], "V")
		this.nValue = new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.nx+4, this.ny, (w/4)-4, 2*h/3-4, 0, $g[15], "%01X", this.n)
		this.zValue = new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.zx+4, this.zy, (w/4)-4, 2*h/3-4, 0, $g[15], "%01X", this.z)
		this.cValue = new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.cx+4, this.cy, (w/4)-4, 2*h/3-4, 0, $g[15], "%01X", this.c)
		this.vValue = new Rectangle2($g[0], $g[17], 0, 0, $g[13], this.vx+4, this.vy, (w/4)-4, 2*h/3-4, 0, $g[15], "%01X", this.v)
		this.nValue.addEventHandler("eventEE", this, this.$eh16)
		this.zValue.addEventHandler("eventEE", this, this.$eh17)
		this.cValue.addEventHandler("eventEE", this, this.$eh18)
		this.vValue.addEventHandler("eventEE", this, this.$eh19)
		this.nValue.addEventHandler("eventMB", this, this.$eh20)
		this.zValue.addEventHandler("eventMB", this, this.$eh21)
		this.cValue.addEventHandler("eventMB", this, this.$eh22)
		this.vValue.addEventHandler("eventMB", this, this.$eh23)
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

	CPSR.prototype.$eh16 = function(enter, x, y) {
		this.nValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh17 = function(enter, x, y) {
		this.zValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh18 = function(enter, x, y) {
		this.cValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh19 = function(enter, x, y) {
		this.vValue.setBrush(enter ? $g[12] : $g[13])
		return 0
	}

	CPSR.prototype.$eh20 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.n=(this.n+1)%2
			}
			this.updateNValue()
		}
		return 0
	}

	CPSR.prototype.$eh21 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.z=(this.z+1)%2
			}
			this.updateZValue()
		}
		return 0
	}

	CPSR.prototype.$eh22 = function(down, flags, x, y) {
		if (down) {
			if (flags) {
				this.c=(this.c+1)%2
			}
			this.updateCValue()
		}
		return 0
	}

	CPSR.prototype.$eh23 = function(down, flags, x, y) {
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
		$g[84].reset()
		$g[82].reset()
		$g[83].setOpacity(0)
		$g[85].reset()
		$g[86].reset()
		$g[87].reset()
		$g[88].reset()
		$g[89].reset()
		$g[90].reset()
		$g[91].reset()
		$g[92].reset()
		$g[93].reset()
		$g[94].reset()
		$g[114].reset()
		$g[115].reset()
		$g[116].reset()
		$g[117].reset()
		$g[118].reset()
		$g[119].reset()
		$g[120].setOpacity(0)
		$g[121].reset()
		$g[122].setOpacity(0)
		$g[123].reset()
		$g[124].setOpacity(0)
		$g[125].reset()
		$g[126].setOpacity(0)
		$g[128].reset()
		$g[127].reset()
		$g[130].reset()
		$g[131].reset()
		$g[132].setOpacity(0)
		$g[133].reset()
		$g[134].setOpacity(0)
		$g[129].setOpacity(0)
		$g[107].setPen($g[104])
		$g[108].setPen($g[104])
		$g[109].setPen($g[104])
		$g[110].setPen($g[104])
		$g[111].setPen($g[104])
		$g[142].reset()
		$g[143].reset()
		$g[144].reset()
		$g[145].reset()
		$g[146].reset()
		$g[147].reset()
		$g[148].setOpacity(0)
		$g[149].reset()
		$g[150].reset()
		$g[151].reset()
		$g[152].reset()
		$g[153].reset()
		$g[154].reset()
		$g[155].reset()
		$g[156].reset()
		$g[141].txtOp.setOpacity(0)
		$g[141].txtResult.setOpacity(0)
		$g[162].reset()
		$g[163].reset()
		$g[164].reset()
		$g[165].reset()
		$g[166].reset()
		$g[167].reset()
		$g[170].reset()
	}

	function resetRegisters() {
		$g[75].reset()
		$g[75].setValue(124)
		$g[96].reset()
		$g[136].reset()
		$g[137].reset()
		$g[159].reset()
		$g[158].reset()
		$g[169].reset()
		$g[77][0].reset()
		$g[77][1].reset()
		$g[78][0].reset()
		$g[78][1].reset()
		$g[95].reset()
		$g[135].reset()
		$g[157].reset()
		$g[168].reset()
		$g[73].setActive(124)
		$g[158].setInvalid(1)
		$g[158].updateLabel()
		$g[169].setInvalid(1)
		$g[169].updateLabel()
		$g[77][0].setValue(-1)
		$g[77][0].setInvalid(1)
		$g[77][0].updateLabel()
		$g[77][1].setValue(-1)
		$g[77][1].setInvalid(1)
		$g[77][1].updateLabel()
		$g[33]=0
		$g[34]=0
		$g[70].setTxt("%4d", 0)
		$g[71].setTxt("%4d", 0)
	}

	function resetCircuit() {
		resetRegisters()
		resetWires()
	}

	function showBTB(opacity) {
		$g[76].setOpacity(opacity)
		$g[77][0].setOpacity(opacity)
		$g[77][1].setOpacity(opacity)
		$g[78][0].setOpacity(opacity)
		$g[78][1].setOpacity(opacity)
		$g[90].setOpacity(opacity)
		$g[114].setOpacity(opacity)
		$g[79].setOpacity(opacity)
		$g[93].setOpacity(opacity)
		$g[86].setOpacity(opacity)
		$g[125].setOpacity(opacity)
		$g[128].setOpacity(opacity)
		$g[102].setOpacity(opacity)
		$g[127].setOpacity(opacity)
	}

	function showALUForwarding(opacity) {
		if (opacity==0) {
			$g[145].setPoint(0, 1236, 452)
			$g[145].setPoint(1, 1401, 452)
			$g[146].setPoint(0, ($g[29]) ? 1136 : 1209, 551)
			$g[146].setPoint(1, 1371, 551)
			$g[147].setPoint(2, 1263, 573)
			$g[147].setPoint(3, 1371, 573)
			$g[145].setHead(0)
		} else {
			$g[145].setPoint(0, 1236, 485)
			$g[145].setPoint(1, 1371, 485)
			$g[146].setPoint(0, 1236, 529)
			$g[146].setPoint(1, 1371, 529)
			$g[147].setPoint(2, 1263, 551)
			$g[147].setPoint(3, 1371, 551)
			$g[145].setHead(1)
		}
		$g[138].setOpacity(opacity)
		$g[143].setOpacity(opacity)
		$g[144].setOpacity(opacity)
		$g[150].setOpacity(opacity)
		$g[149].setOpacity(opacity)
	}

	function showSMDRForwarding(opacity) {
		if (opacity==0) {
			$g[153].setPoint(1, 1209, 727)
			$g[153].setPoint(2, 1398, 727)
			$g[153].setHead(0)
		} else {
			$g[153].setPoint(1, 1209, 749)
			$g[153].setPoint(2, 1371, 749)
			$g[153].setHead(1)
		}
		$g[140].setOpacity(opacity)
		$g[151].setOpacity(opacity)
		$g[152].setOpacity(opacity)
	}

	function showZeroForwarding(opacity) {
		if (opacity==0) {
			$g[110].setPt(1, 1060, 298)
			$g[110].setPt(2, 1060, 353)
		} else {
			$g[110].setPt(1, 1033, 298)
			$g[110].setPt(2, 1033, 353)
		}
		$g[112].setOpacity(opacity)
		$g[113].setOpacity(opacity)
		$g[107].setOpacity(opacity)
		$g[108].setOpacity(opacity)
		$g[109].setOpacity(opacity)
	}

	function showPipeline(opacity) {
		if (opacity==0) {
			$g[92].setPoint(1, 803, 507)
			$g[92].setPoint(2, 803, 529)
			$g[116].setPoint(0, 803, 507)
			$g[117].setPoint(0, 803, 507)
			$g[94].setPoint(1, 1236, 860)
			$g[133].setPoint(1, 1101, 452)
			$g[133].setPoint(2, 1236, 452)
			$g[130].setPoint(1, 1209, 551)
			$g[153].setPoint(0, 1209, 551)
			$g[155].setPoint(3, 1668, 507)
			$g[156].setPoint(3, 1668, 507)
			$g[154].setPoint(1, 1695, 727)
			$g[164].setPoint(1, 1939, 507)
			$g[94].setHead(0)
			$g[92].setHead(0)
			$g[133].setHead(0)
			$g[145].setHead(0)
			$g[130].setHead(0)
			$g[153].setHead(0)
			$g[154].setHead(0)
			$g[155].setHead(0)
			$g[156].setHead(0)
			$g[164].setHead(0)
			showBTB(opacity)
			showALUForwarding(opacity)
			showSMDRForwarding(opacity)
			showZeroForwarding(opacity)
		} else {
			$g[92].setPoint(1, 749, 507)
			$g[92].setPoint(2, 776, 507)
			$g[116].setPoint(0, 803, 551)
			$g[117].setPoint(0, 803, 551)
			$g[94].setPoint(1, 1182, 860)
			$g[133].setPoint(1, 1101, 463)
			$g[133].setPoint(2, 1182, 463)
			$g[130].setPoint(1, 1182, 551)
			$g[153].setPoint(0, 1209, 595)
			$g[155].setPoint(3, 1614, 507)
			$g[156].setPoint(3, 1614, 507)
			$g[154].setPoint(1, 1587, 727)
			$g[164].setPoint(1, 1885, 507)
			$g[94].setHead(1)
			$g[92].setHead(1)
			$g[133].setHead(1)
			$g[145].setHead(1)
			$g[130].setHead(1)
			$g[153].setHead(1)
			$g[154].setHead(1)
			$g[155].setHead(1)
			$g[156].setHead(1)
			$g[164].setHead(1)
			showBTB($g[27]==BRANCH_PREDICTION ? 1 : 0)
			showALUForwarding($g[29]==ALU_FORWARDING ? 1 : 0)
			showSMDRForwarding($g[30]==FORWARDING_TO_SMDR ? 1 : 0)
			showZeroForwarding($g[31]==ZERO_FORWARDING ? 1 : 0)
		}
		$g[91].setOpacity(opacity)
		$g[81].setOpacity(opacity)
		$g[88].setOpacity(opacity)
		$g[96].setOpacity(opacity)
		$g[135].setOpacity(opacity)
		$g[157].setOpacity(opacity)
		$g[168].setOpacity(opacity)
		$g[142].setOpacity(opacity)
		$g[162].setOpacity(opacity)
		$g[136].setOpacity(opacity)
		$g[137].setOpacity(opacity)
		$g[158].setOpacity(opacity)
		$g[169].setOpacity(opacity)
		$g[159].setOpacity(opacity)
		$g[63].label.setOpacity(opacity)
		$g[64].label.setOpacity(opacity)
		$g[65].label.setOpacity(opacity)
		$g[66].label.setOpacity(opacity)
		$g[67].label.setOpacity(opacity)
	}

	function setPEMode(mode) {
		$g[26]=mode
		if ($g[26]==0) {
			$g[62].setCaption("Pipelining Enabled")
			showPipeline(1)
		} else
		if ($g[26]==1) {
			$g[62].setCaption("Pipelining Disabled")
			showPipeline(0)
		}
		setArg("peMode", $g[26].toString())
	}

	function setBPMode(mode) {
		$g[27]=mode
		if ($g[27]==0) {
			$g[63].setCaption("Branch Prediction")
			showBTB(1)
		} else
		if ($g[27]==1) {
			$g[63].setCaption("Branch Interlock")
			showBTB(0)
		} else
		if ($g[27]==2) {
			$g[63].setCaption("Delayed Branches")
			showBTB(0)
		}
		setArg("bpMode", $g[27].toString())
	}

	function setLIMode(mode) {
		$g[28]=mode
		if ($g[28]==0) {
			$g[64].setCaption("Load Interlock")
		} else
		if ($g[28]==1) {
			$g[64].setCaption("No Load Interlock")
		}
		setArg("liMode", $g[28].toString())
	}

	function setAFMode(mode) {
		$g[29]=mode
		if ($g[29]==0) {
			$g[65].setCaption("ALU Forwarding")
			showALUForwarding(1)
		} else
		if ($g[29]==1) {
			$g[65].setCaption("ALU Interlock")
			showALUForwarding(0)
		} else
		if ($g[29]==2) {
			$g[65].setCaption("No ALU Interlock")
			showALUForwarding(0)
		}
		setArg("afMode", $g[29].toString())
	}

	function setSFMode(mode) {
		$g[30]=mode
		if ($g[30]==0) {
			$g[66].setCaption("Store Operand\nForwarding")
			showSMDRForwarding(1)
		} else
		if ($g[30]==1) {
			$g[66].setCaption("Store Interlock")
			showSMDRForwarding(0)
		} else
		if ($g[30]==2) {
			$g[66].setCaption("No Store Interlock")
			showSMDRForwarding(0)
		}
		setArg("sfMode", $g[30].toString())
	}

	function setZFMode(mode) {
		$g[31]=mode
		if ($g[31]==0) {
			$g[67].setCaption("Zero Forwarding")
			showZeroForwarding(1)
		} else
		if ($g[31]==1) {
			$g[67].setCaption("Zero Interlock")
			showZeroForwarding(0)
		} else
		if ($g[31]==2) {
			$g[67].setCaption("No Zero Interlock")
			showZeroForwarding(0)
		}
		setArg("zfMode", $g[31].toString())
	}

	function $eh24(enter, x, y) {
		$g[179].setBrush(enter ? $g[9] : $g[13])
	}

	function $eh25(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			setArg("help", "0")
			$g[20].setOpacity(0)
		}
		return 0
	}

	function btbIndex(pc) {
		for (let lp1 = 0; lp1<2; lp1++)
		if ($g[77][lp1].value==pc)
		return lp1
		return -1
	}

	function calcNewPC() {
		if (instrIsBranch($g[95].vIns)) {
			let pen = $g[105]
			if ($g[31]==ZERO_FORWARDING) {
				if (($g[135].vRdt==$g[95].vRs1) && (instrOpTypeRdt($g[135].vIns)==OP_TYPE_REG) && instrIsLoadOrStore($g[135].vIns)==0) {
					$g[107].setPen(pen)
					$g[183]=$g[158].newValue
				} else
				if ($g[158].tagMatches($g[95].vRs1)) {
					$g[108].setPen(pen)
					$g[183]=$g[158].value
				} else {
					$g[180]=$g[85]
					$g[110].setPen(pen)
					$g[183]=$g[97][$g[95].vRs1].value
					$g[134].setTxt("R%d:%02X", $g[95].vRs1, $g[183])
					$g[134].setOpacity(1)
					fork(37, $g[133], 24)
				}
			} else {
				$g[110].setPen(pen)
				$g[183]=$g[97][$g[95].vRs1].value
			}
			$g[111].setPen(pen)
			if (($g[95].vIns==B)==($g[183]==0)) {
				$g[181]=$g[123]
				$g[184]=($g[96].value+$g[95].vRs2)&127
			} else {
				$g[181]=$g[121]
				$g[184]=($g[96].value+4)&127
			}
			$g[185]=$g[85]
			$g[182]=$g[125]
		}
	}

	function updBTB() {
		if ($g[184]!=$g[75].value) {
			$g[75].setNewValue($g[184])
			$g[180]=$g[185]
			if ($g[27]==BRANCH_PREDICTION) {
				if ($g[184]==$g[96].value+4) {
					if (btbIndex($g[96].value)>=0)
					$g[77][btbIndex($g[96].value)].setInvalid(1)
				} else {
					if (btbIndex($g[96].value)>=0)
					$g[24]=btbIndex($g[96].value)
					else 
					$g[24]=($g[24]) ? 0 : 1
					$g[77][$g[24]].setNewValue($g[96].value)
					$g[77][$g[24]].setInvalid(0)
					$g[77][$g[24]].useTag=0
					$g[78][$g[24]].setNewValue($g[184])
				}
			}
		}
	}

	function detectStall() {
		$g[23]=NO_STALL
		$g[25]=0
		if ($g[29]==ALU_INTERLOCK) {
			if (instrOpTypeRdt($g[135].vIns)==OP_TYPE_REG) {
				if ((instrOpTypeRs1($g[95].vIns)==OP_TYPE_REG) && ($g[95].vRs1==$g[135].vRdt))
				$g[23]=DATA_STALL
				if ((instrOpTypeRs2($g[95].vIns)==OP_TYPE_REG) && ($g[95].vRs2==$g[135].vRdt))
				$g[23]=DATA_STALL
			}
			if (instrOpTypeRdt($g[157].vIns)==OP_TYPE_REG) {
				if ((instrOpTypeRs1($g[95].vIns)==OP_TYPE_REG) && ($g[95].vRs1==$g[157].vRdt))
				$g[23]=DATA_STALL
				if ((instrOpTypeRs2($g[95].vIns)==OP_TYPE_REG) && ($g[95].vRs2==$g[157].vRdt))
				$g[23]=DATA_STALL
			}
		}
		if (($g[30]==STORE_INTERLOCK) && ($g[95].vIns==STR)) {
			if ((instrOpTypeRdt($g[135].vIns)==OP_TYPE_REG) && ($g[135].vRdt==$g[95].vRdt))
			$g[23]=DATA_STALL
			if ((instrOpTypeRdt($g[157].vIns)==OP_TYPE_REG) && ($g[157].vRdt==$g[95].vRdt))
			$g[23]=DATA_STALL
		}
		if (($g[31]==ZERO_INTERLOCK) && instrIsBranch($g[95].vIns)) {
			if ((instrOpTypeRdt($g[135].vIns)==OP_TYPE_REG) && ($g[135].vRdt==$g[95].vRs1))
			$g[23]=DATA_STALL
			if ((instrOpTypeRdt($g[157].vIns)==OP_TYPE_REG) && ($g[157].vRdt==$g[95].vRs1))
			$g[23]=DATA_STALL
		}
		if (($g[28]==LOAD_INTERLOCK) && ($g[135].vIns==LDR)) {
			if ((instrOpTypeRs1($g[95].vIns)==OP_TYPE_REG) && ($g[95].vRs1==$g[135].vRdt))
			$g[23]=DATA_STALL
			if ((instrOpTypeRs2($g[95].vIns)==OP_TYPE_REG) && ($g[95].vRs2==$g[135].vRdt))
			$g[23]=DATA_STALL
		}
		if (($g[23]==NO_STALL) && ($g[27]!=DELAYED_BRANCHES) && instrIsBranch($g[95].vIns) && ($g[184]!=$g[75].value)) {
			$g[25]=1
			$g[23]=CTRL_STALL
		}
		if ($g[23]==DATA_STALL) {
			$g[74].setStall(1, 0)
		} else
		if ($g[23]==CTRL_STALL) {
			$g[74].setStall(1, 1)
		}
	}

	function setlocked() {
		let b_locked = $g[32] || $g[22]
		$g[62].showLocked(b_locked)
		$g[63].showLocked(b_locked)
		$g[64].showLocked(b_locked)
		$g[65].showLocked(b_locked)
		$g[66].showLocked(b_locked)
		$g[67].showLocked(b_locked)
	}

	function $eh26(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setPEMode(($g[26]+1)%2)
			resetCircuit()
		}
		return 0
	}

	function $eh27(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setBPMode(($g[27]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh28(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setLIMode(($g[28]+1)%2)
			resetCircuit()
		}
		return 0
	}

	function $eh29(down, flags, x, y) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setAFMode(($g[29]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh30(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setSFMode(($g[30]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh31(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT) && (!$g[32]) && (!$g[22])) {
			setZFMode(($g[31]+1)%3)
			resetCircuit()
		}
		return 0
	}

	function $eh32(down, flags, x, y) {
		if (down && (flags&MB_LEFT)) {
			let lp1, opcode, reg
			let instr
			let s = "saveanim.php?state="
			for (lp1=0; lp1<32; lp1++) {
				instr=$g[73].instruction[lp1]
				opcode=(instr.vIns<<24)|(instr.vRdt<<16)|(instr.vRs1<<8)|(instr.vRs2)
				s=sprintf("%si%d='0x%08X' ", s, lp1, opcode)
			}
			for (lp1=0; lp1<4; lp1++) {
				reg=$g[97][lp1].value
				s=sprintf("%sr%d='0x%02X' ", s, lp1, reg)
			}
			for (lp1=0; lp1<4; lp1++) {
				reg=$g[160][lp1].value
				s=sprintf("%sm%d='0x%02X' ", s, lp1, reg)
			}
			s=sprintf("%speMode='%d' bpMode='%d' liMode='%d' afMode='%d' sfMode='%d' zfMode='%d'", s, $g[26], $g[27], $g[28], $g[29], $g[30], $g[31])
			getURL(s)
		}
		return 0
	}

	function $eh33(down, flags, x, y) {
		if (down && (flags&MB_LEFT))
		getURL("https://www.scss.tcd.ie/Jeremy.Jones/VivioJS/vivio.htm")
		return 0
	}

	function $eh34(down, flags, $2, $3) {
		if (down && (flags&MB_LEFT))
		getURL("showanim.php")
	}

	function $eh35(enter, x, y) {
		$g[72].setBrush(enter ? $g[8] : $g[12])
		$g[72].setTxtPen(enter ? $g[3] : $g[1])
		return 0
	}

	function $eh36(down, flags, x, y) {
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
				$g[35] = newArray(55)
				$g[35][NOP]="NOP"
				$g[35][ADD]="ADD"
				$g[35][ADC]="ADC"
				$g[35][SUB]="SUB"
				$g[35][SBC]="SBC"
				$g[35][RSB]="RSB"
				$g[35][RSC]="RSC"
				$g[35][MUL]="MUL"
				$g[35][AND]="AND"
				$g[35][ORR]="ORR"
				$g[35][EOR]="EOR"
				$g[35][BIC]="BIC"
				$g[35][LSL]="LSL"
				$g[35][LSR]="LSR"
				$g[35][ASR]="ASR"
				$g[35][ROR]="ROR"
				$g[35][ADDi]="ADD(i)"
				$g[35][ADCi]="ADC(i)"
				$g[35][SUBi]="SUB(i)"
				$g[35][SBCi]="SBC(i)"
				$g[35][RSBi]="RSB(i)"
				$g[35][RSCi]="RSC(i)"
				$g[35][MULi]="MUL(i)"
				$g[35][ANDi]="AND(i)"
				$g[35][ORRi]="ORR(i)"
				$g[35][EORi]="EOR(i)"
				$g[35][BICi]="BIC(i)"
				$g[35][LSLi]="LSL(i)"
				$g[35][LSRi]="LSR(i)"
				$g[35][ASRi]="ASR(i)"
				$g[35][RORi]="ROR(i)"
				$g[35][CMN]="CMN"
				$g[35][CMP]="CMP"
				$g[35][TEQ]="TEQ"
				$g[35][TST]="TST"
				$g[35][CMNi]="CMN(i)"
				$g[35][CMPi]="CMP(i)"
				$g[35][TEQi]="TEQ(i)"
				$g[35][TSTi]="TST(i)"
				$g[35][MOV]="MOV"
				$g[35][MVN]="MVN"
				$g[35][LDR]="LDR"
				$g[35][STR]="STR"
				$g[35][SWP]="SWP"
				$g[35][MOVi]="MOV(i)"
				$g[35][MVNi]="MVN(i)"
				$g[35][LDRi]="LDR(i)"
				$g[35][STRi]="STR(i)"
				$g[35][B]="B"
				$g[35][BL]="BL"
				$g[35][Bi]="B(i)"
				$g[35][BLi]="BL(i)"
				$g[35][HALT]="HALT"
				$g[35][STALL]="STALL"
				$g[35][EMPTY]="EMPTY"
				$g[36] = new SolidBrush(BORDEAU)
				$g[37] = new SolidBrush(WHITE)
				$g[38] = new SolidPen(DOT, 1, rgba(0.75, 0.75, 0.75))
				$g[39] = new SolidPen(SOLID, 1, RED, ARROW60_END)
				$g[40] = new SolidBrush(PURPLE)
				$g[41] = new SolidBrush(WHITE)
				$g[42] = new SolidBrush(LIGHT_BLUE)
				$g[43] = new Font("Calibri", 24)
				$g[44] = new SolidPen(SOLID, 1, RED, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[45] = new SolidPen(SOLID, 1, GREEN, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[46] = new SolidPen(SOLID, 1, ORANGE, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[47] = new SolidBrush(WHITE)
				$g[48] = new SolidBrush(GRAY224)
				$g[49] = new SolidBrush(PURPLE)
				$g[50] = new SolidBrush(WHITE)
				$g[51] = getArg("name", "")
				if (!($g[51]!="")) {
					$pc = 1
					continue
				}
				$g[51]=sprintf(":  %s", $g[51])
				$pc = 1
			case 1:
				$g[52] = new Font("Calibri", 54, SMALLCAPS|ITALIC)
				$g[53] = new Rectangle2($g[0], 0, HLEFT, 0, new SolidBrush(DARK_BLUE), 27, 27, 911, 66, $g[4], $g[52], sprintf(" MIPS Animation %s", $g[51]))
				$g[54] = new SolidPen(DASH, 3, DARK_BLUE, ROUND_START|ROUND_JOIN|ROUND_END)
				new Line2($g[0], 0, ABSOLUTE, $g[54], 425, 176, 1993, 176)
				new Line2($g[0], 0, ABSOLUTE, $g[54], 425, 970, 1993, 970)
				new Line2($g[0], 0, ABSOLUTE, $g[54], 425, 176, 425, 970)
				$g[55] = new Line2($g[0], 0, ABSOLUTE, $g[54], 749, 176, 749, 970)
				$g[56] = new Line2($g[0], 0, ABSOLUTE, $g[54], 1155, 176, 1155, 970)
				$g[57] = new Line2($g[0], 0, ABSOLUTE, $g[54], 1560, 176, 1560, 970)
				$g[58] = new Line2($g[0], 0, ABSOLUTE, $g[54], 1858, 176, 1858, 970)
				new Line2($g[0], 0, ABSOLUTE, $g[54], 1993, 176, 1993, 970)
				$g[59] = new SolidPen(DOT, THIN, BLACK)
				new Line2($g[0], 0, ABSOLUTE, $g[59], 27, 992, 1993, 992)
				$g[60] = new Font("Calibri", 27, BOLD)
				$g[61] = new Button(54, 1014, 216, 54, "Save Configuration", BUTTON_SP)
				$g[62] = new Button(425, 1014, 216, 44, "Pipelining Enabled", BUTTON_PE)
				$g[63] = new Button(668, 1014, 216, 44, "Branch Prediction", BUTTON_BP)
				$g[64] = new Button(911, 1014, 216, 44, "Load Interlock", BUTTON_LI)
				$g[65] = new Button(1155, 1014, 216, 44, "ALU Forwarding", BUTTON_AF)
				$g[66] = new Button(1398, 1014, 216, 44, "Store Operand\nForwarding", BUTTON_SF)
				$g[67] = new Button(1641, 1014, 216, 44, "Zero Forwarding", BUTTON_ZF)
				$g[68] = new Image($g[0], 0, 0, 0, "vivio.png", 1885, 1014, 0, 0, LOGOW, LOGOH)
				new Txt($g[0], 0, HLEFT|VTOP, 27, 101, $g[2], $g[15], "instructions executed:")
				$g[69] = new Txt($g[0], 0, HLEFT|VTOP, 27, 123, $g[2], $g[15], "ticks:")
				$g[70] = new Txt($g[0], 0, HLEFT|VTOP, 243, 101, $g[3], $g[15], "0")
				$g[71] = new Txt($g[0], 0, HLEFT|VTOP, 243, 123, $g[3], $g[15], "0")
				$g[72] = new Rectangle2($g[0], 0, 0, 0, 0, 27, 150, 270, 27, 0, $g[15], "Instruction Cache")
				$g[73] = new InstructionMemory(27, 176, 370, 705)
				$g[74] = new AnimatedClock($g[0], 54, 904, 216, 66)
				$g[75] = new Register(641, 463, 54, 88, TOP, "PC")
				$g[76] = new Rectangle2($g[0], 0, 0, 0, 0, 506, 187, 216, 22, 0, $g[15], "Branch Target Buffer")
				$g[77] = newArray(2)
				$g[77][0]=new Register(506, 220, 108, 44, LEFT, "PC")
				$g[77][1]=new Register(506, 264, 108, 44, LEFT, "PC")
				$g[78] = newArray(2)
				$g[78][0]=new Register(614, 220, 108, 44, RIGHT, "PPC")
				$g[78][1]=new Register(614, 264, 108, 44, RIGHT, "PPC")
				$g[79] = new Component(641, 375, 81, 22, "mux 2")
				$g[80] = new Component(560, 452, 27, 110, "mux 1")
				$g[81] = new Component(533, 595, 54, 22, "+4")
				$g[82] = new AnimPipe()
				$g[82].addPoint(397, 860)
				$g[82].addPoint(776, 860)
				$g[83] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 587, 8130, -81, -13, 130, 26, $g[4], $g[15])
				$g[83].setRounded(2, 2)
				$g[84] = new AnimPipe()
				$g[84].addPoint(668, 551)
				$g[84].addPoint(668, 705)
				$g[84].addPoint(397, 705)
				$g[85] = new AnimPipe()
				$g[85].addPoint(911, 375)
				$g[85].addPoint(911, 353)
				$g[85].addPoint(506, 353)
				$g[85].addPoint(506, 474)
				$g[85].addPoint(560, 474)
				$g[86] = new AnimPipe()
				$g[86].addPoint(506, 264)
				$g[86].addPoint(479, 264)
				$g[86].addPoint(479, 496)
				$g[86].addPoint(560, 496)
				$g[87] = new AnimPipe()
				$g[87].addPoint(952, 110)
				$g[87].addPoint(452, 110)
				$g[87].addPoint(452, 518)
				$g[87].addPoint(560, 518)
				$g[88] = new AnimPipe()
				$g[88].addPoint(533, 606)
				$g[88].addPoint(506, 606)
				$g[88].addPoint(506, 540)
				$g[88].addPoint(560, 540)
				$g[89] = new AnimPipe()
				$g[89].addPoint(587, 507)
				$g[89].addPoint(641, 507)
				$g[90] = new AnimPipe()
				$g[90].addPoint(668, 462)
				$g[90].addPoint(668, 397)
				$g[91] = new AnimPipe()
				$g[91].addPoint(668, 551)
				$g[91].addPoint(668, 606)
				$g[91].addPoint(587, 606)
				$g[92] = new AnimPipe()
				$g[92].addPoint(695, 507)
				$g[92].addPoint(749, 507)
				$g[92].addPoint(776, 507)
				$g[93] = new AnimPipe()
				$g[93].addPoint(681, 375)
				$g[93].addPoint(681, 309)
				$g[94] = new AnimPipe()
				$g[94].addPoint(830, 860)
				$g[94].addPoint(1182, 860)
				$g[95] = new InstructionRegister(776, 771, 54, 187, "ID")
				$g[96] = new Register(776, 463, 54, 88, TOP, "PC1")
				new Txt($g[0], 0, HLEFT|VTOP, 1182, 88, 0, $g[15], "Register\nFile")
				$g[97] = newArray(16)
				$g[97][0]=new Register(952, 66, 32, 88, TOP, "R0")
				$g[97][0].setFixed()
				$g[97][1]=new Register(984, 66, 32, 88, TOP, "R1")
				$g[97][2]=new Register(1016, 66, 32, 88, TOP, "R2")
				$g[97][3]=new Register(1048, 66, 32, 88, TOP, "R3")
				$g[97][4]=new Register(1080, 66, 32, 88, TOP, "R4")
				$g[97][5]=new Register(1112, 66, 32, 88, TOP, "R5")
				$g[97][6]=new Register(1144, 66, 32, 88, TOP, "R6")
				$g[97][7]=new Register(1176, 66, 32, 88, TOP, "R7")
				$g[97][8]=new Register(1208, 66, 32, 88, TOP, "R8")
				$g[97][9]=new Register(1240, 66, 32, 88, TOP, "R9")
				$g[97][10]=new Register(1272, 66, 32, 88, TOP, "R10")
				$g[97][11]=new Register(1304, 66, 32, 88, TOP, "R11")
				$g[97][12]=new Register(1336, 66, 32, 88, TOP, "R12")
				$g[97][13]=new Register(1368, 66, 32, 88, TOP, "SP")
				$g[97][14]=new Register(1400, 66, 32, 88, TOP, "LR")
				$g[97][15]=new Register(1432, 66, 32, 88, TOP, "PC")
				$g[98] = new CPSR(1490, 66, 140, 88)
				$g[99] = new Component(844, 375, 135, 22, "mux 3")
				$g[100] = new Component(830, 595, 81, 22, "ADD4")
				$g[101] = new Component(911, 595, 81, 22, "ADDi")
				$g[102] = new Component(776, 220, 27, 88, "mux 4")
				$g[103] = new Component(1101, 518, 27, 66, "mux 5")
				new Rectangle2($g[0], 0, 0, 0, 0, 857, 661, 54, 22, 0, $g[15], "4")
				$g[104] = new SolidPen(SOLID, 0, PURPLE, ARROW60_END)
				$g[105] = new SolidPen(SOLID, 5, RED, ARROW60_END)
				$g[106] = new SolidPen(SOLID, THICK, BLACK)
				$g[107] = new Line2($g[0], $g[17], ABSOLUTE, $g[104], 1582, 507, 1582, 331, 1087, 331, 1087, 353)
				$g[108] = new Line2($g[0], $g[17], ABSOLUTE, $g[104], 1847, 507, 1847, 320, 1074, 320, 1074, 353)
				$g[109] = new Line2($g[0], $g[17], ABSOLUTE, $g[104], 1966, 309, 1060, 309, 1060, 353)
				$g[110] = new Line($g[0], $g[17], ABSOLUTE, $g[104], 0, 0, 1101, 298, 1033, 298, 1033, 353)
				$g[111] = new Line2($g[0], $g[17], ABSOLUTE, $g[104], 1060, 353, 1060, 386, 979, 386)
				$g[112] = new Line2($g[0], $g[17], ABSOLUTE, $g[106], 1030, 353, 1090, 353)
				$g[113] = new Txt($g[0], $g[17], HLEFT|VTOP, 1036, 357, 0, $g[15], "zero")
				$g[114] = new AnimPipe()
				$g[114].addPoint(803, 463)
				$g[114].addPoint(803, 441)
				$g[114].addPoint(695, 441)
				$g[114].addPoint(695, 397)
				$g[115] = new AnimPipe()
				$g[115].addPoint(871, 595)
				$g[115].addPoint(871, 562)
				$g[115].addPoint(1101, 562)
				$g[116] = new AnimPipe()
				$g[116].addPoint(803, 551)
				$g[116].addPoint(803, 705)
				$g[116].addPoint(857, 705)
				$g[116].addPoint(857, 617)
				$g[117] = new AnimPipe()
				$g[117].addPoint(803, 551)
				$g[117].addPoint(803, 705)
				$g[117].addPoint(938, 705)
				$g[117].addPoint(938, 617)
				$g[118] = new AnimPipe()
				$g[118].addPoint(884, 661)
				$g[118].addPoint(884, 617)
				$g[119] = new AnimPipe()
				$g[119].addPoint(830, 860)
				$g[119].addPoint(965, 860)
				$g[119].addPoint(965, 617)
				$g[120] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 8235, 829, -32, -13, 65, 32, $g[4], $g[15])
				$g[120].setRounded(2, 2)
				$g[121] = new AnimPipe()
				$g[121].addPoint(871, 595)
				$g[121].addPoint(871, 397)
				$g[122] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 871, 441, -32, -13, 65, 32, $g[4], $g[15])
				$g[122].setRounded(2, 2)
				$g[123] = new AnimPipe()
				$g[123].addPoint(952, 595)
				$g[123].addPoint(952, 397)
				$g[124] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 952, 441, -32, -13, 65, 32, $g[4], $g[15])
				$g[124].setRounded(2, 2)
				$g[125] = new AnimPipe()
				$g[125].addPoint(911, 375)
				$g[125].addPoint(911, 287)
				$g[125].addPoint(803, 287)
				$g[126] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 911, 353, -32, -13, 65, 32, $g[4], $g[15])
				$g[126].setRounded(2, 2)
				$g[127] = new AnimPipe()
				$g[127].addPoint(776, 264)
				$g[127].addPoint(722, 264)
				$g[128] = new AnimPipe()
				$g[128].addPoint(952, 110)
				$g[128].addPoint(911, 110)
				$g[128].addPoint(911, 242)
				$g[128].addPoint(803, 242)
				$g[129] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 911, 97, -32, 0, 65, 32, $g[4], $g[15])
				$g[130] = new AnimPipe()
				$g[130].addPoint(1128, 551)
				$g[130].addPoint(1182, 551)
				$g[131] = new AnimPipe()
				$g[131].addPoint(1019, 154)
				$g[131].addPoint(1019, 540)
				$g[131].addPoint(1101, 540)
				$g[132] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 1019, 181, -32, 0, 65, 32, $g[4], $g[15], "R0:0")
				$g[132].setRounded(2, 2)
				$g[133] = new AnimPipe()
				$g[133].addPoint(1101, 154)
				$g[133].addPoint(1101, 463)
				$g[133].addPoint(1182, 463)
				$g[134] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 1101, 181, -32, 0, 65, 32, $g[4], $g[15], "R0:0")
				$g[134].setRounded(2, 2)
				$g[135] = new InstructionRegister(1182, 771, 54, 187, "EX")
				$g[136] = new Register(1182, 419, 54, 88, TOP, "A")
				$g[137] = new Register(1182, 507, 54, 88, BOTTOM, "B")
				$g[138] = new Component(1371, 397, 27, 110, "mux 6")
				$g[139] = new Component(1371, 507, 27, 110, "mux 7")
				$g[140] = new Component(1371, 683, 27, 88, "mux 8")
				$g[141] = new ALU(1425, 419, 108, 176)
				$g[142] = new AnimPipe()
				$g[142].addPoint(1236, 860)
				$g[142].addPoint(1614, 860)
				$g[143] = new AnimPipe()
				$g[143].addPoint(1641, 463)
				$g[143].addPoint(1641, 375)
				$g[143].addPoint(1317, 375)
				$g[143].addPoint(1317, 419)
				$g[143].addPoint(1371, 419)
				$g[144] = new AnimPipe()
				$g[144].addPoint(1912, 463)
				$g[144].addPoint(1912, 353)
				$g[144].addPoint(1290, 353)
				$g[144].addPoint(1290, 441)
				$g[144].addPoint(1371, 441)
				$g[145] = new AnimPipe()
				$g[145].addPoint(1236, 485)
				$g[145].addPoint(1371, 485)
				$g[146] = new AnimPipe()
				$g[146].addPoint(1236, 529)
				$g[146].addPoint(1371, 529)
				$g[147] = new AnimPipe()
				$g[147].addPoint(1236, 860)
				$g[147].addPoint(1263, 860)
				$g[147].addPoint(1263, 551)
				$g[147].addPoint(1371, 551)
				$g[148] = new Rectangle($g[0], $g[19], 0, 0, $g[11], 1268, 816, -27, 0, 54, 26, $g[4], $g[15], "IMM")
				$g[148].setRounded(2, 2)
				$g[149] = new AnimPipe()
				$g[149].addPoint(1912, 551)
				$g[149].addPoint(1912, 661)
				$g[149].addPoint(1290, 661)
				$g[149].addPoint(1290, 573)
				$g[149].addPoint(1371, 573)
				$g[150] = new AnimPipe()
				$g[150].addPoint(1641, 551)
				$g[150].addPoint(1641, 639)
				$g[150].addPoint(1317, 639)
				$g[150].addPoint(1317, 595)
				$g[150].addPoint(1371, 595)
				$g[151] = new AnimPipe()
				$g[151].addPoint(1641, 551)
				$g[151].addPoint(1641, 639)
				$g[151].addPoint(1317, 639)
				$g[151].addPoint(1317, 705)
				$g[151].addPoint(1371, 705)
				$g[152] = new AnimPipe()
				$g[152].addPoint(1912, 551)
				$g[152].addPoint(1912, 661)
				$g[152].addPoint(1290, 661)
				$g[152].addPoint(1290, 727)
				$g[152].addPoint(1371, 727)
				$g[153] = new AnimPipe()
				$g[153].addPoint(1209, 595)
				$g[153].addPoint(1209, 749)
				$g[153].addPoint(1371, 749)
				$g[154] = new AnimPipe()
				$g[154].addPoint(1398, 727)
				$g[154].addPoint(1587, 727)
				$g[155] = new AnimPipe()
				$g[155].addPoint(1398, 452)
				$g[155].addPoint(1425, 452)
				$g[155].addPoint(1560, 507)
				$g[155].addPoint(1614, 507)
				$g[156] = new AnimPipe()
				$g[156].addPoint(1398, 562)
				$g[156].addPoint(1425, 562)
				$g[156].addPoint(1560, 507)
				$g[156].addPoint(1614, 507)
				$g[157] = new InstructionRegister(1614, 771, 54, 187, "MA")
				$g[158] = new Register(1614, 463, 54, 88, TOP, "O0")
				$g[159] = new Register(1587, 705, 108, 44, RIGHT, "SMR")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1595, 220, 0, $g[15], "memory\naddress")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1736, 705, 0, $g[15], "memory\ndata-in")
				new Txt($g[0], $g[17], HLEFT|VTOP, 1763, 220, 0, $g[15], "memory\ndata-out")
				new Txt($g[0], 0, HLEFT|VTOP, 1884, 77, 0, $g[15], "Data\nCache\n(memory)")
				$g[160] = newArray(4)
				$g[160][0]=new Register(1654, 66, 108, 44, LEFT, "M0")
				$g[160][1]=new Register(1654, 110, 108, 44, LEFT, "M1")
				$g[160][2]=new Register(1763, 66, 108, 44, RIGHT, "M2")
				$g[160][3]=new Register(1763, 110, 108, 44, RIGHT, "M3")
				$g[161] = new Component(1804, 463, 27, 88, "mux 9")
				$g[162] = new AnimPipe()
				$g[162].addPoint(1668, 860)
				$g[162].addPoint(1885, 860)
				$g[163] = new AnimPipe()
				$g[163].addPoint(1668, 507)
				$g[163].addPoint(1804, 507)
				$g[164] = new AnimPipe()
				$g[164].addPoint(1831, 507)
				$g[164].addPoint(1885, 507)
				$g[165] = new AnimPipe()
				$g[165].addPoint(1668, 507)
				$g[165].addPoint(1695, 507)
				$g[165].addPoint(1695, 154)
				$g[166] = new AnimPipe()
				$g[166].addPoint(1695, 727)
				$g[166].addPoint(1723, 727)
				$g[166].addPoint(1723, 154)
				$g[167] = new AnimPipe()
				$g[167].addPoint(1750, 154)
				$g[167].addPoint(1750, 485)
				$g[167].addPoint(1804, 485)
				$g[168] = new InstructionRegister(1885, 771, 54, 187, "WB")
				$g[169] = new Register(1885, 463, 54, 88, TOP, "O1")
				$g[170] = new AnimPipe()
				$g[170].addPoint(1939, 507)
				$g[170].addPoint(1980, 507)
				$g[170].addPoint(1980, 22)
				$g[170].addPoint(1060, 22)
				$g[170].addPoint(1060, 66)
				$g[141].txtResult.moveToFront()
				resetCircuit()
				$g[173] = ""
				$g[171]=0
				$pc = 2
			case 2:
				if (!($g[171]<32)) {
					$pc = 4
					continue
				}
				$g[73].setOpcode(4*$g[171], 0)
				$pc = 3
			case 3:
				$g[171]++
				$pc = 2
				continue
			case 4:
				$g[171]=0
				$pc = 5
			case 5:
				if (!($g[171]<4)) {
					$pc = 7
					continue
				}
				$g[173]=sprintf("r%d", $g[171])
				$g[97][$g[171]].setValue(getArgAsNum($g[173], 0))
				$pc = 6
			case 6:
				$g[171]++
				$pc = 5
				continue
			case 7:
				$g[171]=0
				$pc = 8
			case 8:
				if (!($g[171]<4)) {
					$pc = 10
					continue
				}
				$g[173]=sprintf("m%d", $g[171])
				$g[160][$g[171]].setValue(getArgAsNum($g[173], 0))
				$pc = 9
			case 9:
				$g[171]++
				$pc = 8
				continue
			case 10:
				setTPS(20)
				$g[14]=getArgAsNum("example", 0)
				if (!($g[14]==0)) {
					$pc = 14
					continue
				}
				$g[171]=0
				$pc = 11
			case 11:
				if (!($g[171]<32)) {
					$pc = 13
					continue
				}
				$g[173]=sprintf("i%d", $g[171])
				$g[73].setOpcode(4*$g[171], getArgAsNum($g[173], 0))
				$pc = 12
			case 12:
				$g[171]++
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
				$g[73].setValue(44, HALT, 0, 0, 0)
				$g[97][2].setValue(9)
				$g[97][3].setValue(8)
				setTPS(100)
				$pc = 23
				continue
			case 15:
				if (!($g[14]==2)) {
					$pc = 16
					continue
				}
				$g[73].setValue(0, ADD, 1, 2, 3)
				$g[73].setValue(4, SUB, 3, 1, 2)
				$g[73].setValue(8, AND, 2, 1, 3)
				$g[73].setValue(12, EOR, 2, 1, 3)
				$g[73].setValue(16, ADD, 2, 1, 0)
				$g[73].setValue(20, HALT, 0, 0, 0)
				$g[97][1].setValue(1)
				$g[97][2].setValue(2)
				setTPS(50)
				$pc = 22
				continue
			case 16:
				if (!($g[14]==3)) {
					$pc = 17
					continue
				}
				$g[73].setValue(0, ADD, 1, 1, 2)
				$g[73].setValue(4, ADD, 2, 1, 2)
				$g[73].setValue(8, ADD, 1, 1, 2)
				$g[73].setValue(12, ADD, 2, 1, 2)
				$g[73].setValue(16, ADD, 1, 1, 2)
				$g[73].setValue(20, HALT, 0, 0, 0)
				$g[97][1].setValue(1)
				$g[97][2].setValue(2)
				setTPS(50)
				$pc = 21
				continue
			case 17:
				if (!($g[14]==4)) {
					$pc = 18
					continue
				}
				$g[73].setValue(4, ADD, 0, 0, 0)
				$g[73].setValue(8, ADD, 0, 0, 0)
				$g[73].setValue(20, HALT, 0, 0, 0)
				setTPS(50)
				$pc = 20
				continue
			case 18:
				if (!($g[14]==5)) {
					$pc = 19
					continue
				}
				$g[73].setValue(0, B, 0, 0, 1)
				$g[73].setValue(32, ADD, 1, 1, 1)
				$g[73].setValue(36, HALT, 0, 0, 0)
				$g[97][1].setValue(32)
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
				$g[171]=0
				$pc = 25
			case 25:
				if (!($g[171]<32)) {
					$pc = 27
					continue
				}
				$g[173]=sprintf("i%d", $g[171])
				setArg($g[173], $g[73].getOpcode($g[171]*4).toString())
				$pc = 26
			case 26:
				$g[171]++
				$pc = 25
				continue
			case 27:
				$g[14]=($g[14]>maxexample) ? 0 : $g[14]
				$pc = 28
			case 28:
				$g[174] = getArgAsNum("haltOnHalt", 1)
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
				$g[175] = getArgAsNum("help", 1)
				$g[176] = new Rectangle2($g[0], $g[20], 0, 0, $g[12], 0, 0, WIDTH, HEIGHT)
				$g[176].setOpacity(0.5)
				$g[176].setRounded(10, 10)
				$g[177] = new SolidPen(SOLID, 5, RED, ROUND_START|ROUND_JOIN|ROUND_END)
				$g[178] = new Font("Arial", 32, BOLD)
				new Txt($g[0], $g[20], HLEFT|VTOP, 32, 639, $g[177], $g[178], "LEFT CLICK on animation background to start and stop clock.\n\nSHIFT LEFT CLICK on background to execute \"single MIPS clock cycle\".")
				if (!(!$g[22])) {
					$pc = 29
					continue
				}
				$g[176]=new Rectangle2($g[0], $g[20], 0, $g[177], 0, 44, 184, 176, 10)
				$g[176].setRounded(5, 5)
				$g[176]=new Rectangle2($g[0], $g[20], 0, $g[177], 0, 55, 427, 66, 10)
				$g[176].setRounded(5, 5)
				$g[176]=new Rectangle2($g[0], $g[20], 0, $g[177], 0, 132, 427, 31, 10)
				$g[176].setRounded(5, 5)
				$g[176]=new Rectangle2($g[0], $g[20], 0, $g[177], 0, 168, 427, 31, 10)
				$g[176].setRounded(5, 5)
				$g[176]=new Rectangle2($g[0], $g[20], 0, $g[177], 0, 203, 427, 31, 10)
				$g[176].setRounded(5, 5)
				new Txt($g[0], $g[20], HLEFT|VTOP, 397, 132, $g[177], $g[178], "LEFT CLICK to change\ninitial program.")
				new Txt($g[0], $g[20], HLEFT|VTOP, 397, 231, $g[177], $g[178], "LEFT or RIGHT CLICK to \"rotate\"\ninstructions and operands.\nHold and release to reset value.")
				$pc = 29
			case 29:
				$g[176]=new Rectangle2($g[0], $g[20], 0, $g[177], 0, 683, 68, 198, 50)
				$g[176].setRounded(10, 10)
				new Txt($g[0], $g[20], HLEFT|VTOP, 1209, 88, $g[177], $g[178], "LEFT or RIGHT CLICK register\nto increment or decrement value.")
				if (!(!$g[22])) {
					$pc = 30
					continue
				}
				$g[176]=new Rectangle2($g[0], $g[20], 0, $g[177], 0, 242, 1330, 1212, 30)
				$g[176].setRounded(10, 10)
				new Txt($g[0], $g[20], HLEFT|VTOP, 587, 959, $g[177], $g[178], "LEFT CLICK on any of the buttons below to change circuit configuration.")
				$pc = 30
			case 30:
				$g[179] = new Rectangle2($g[0], $g[20], 0, $g[177], $g[13], 925, 507, 270, 66, $g[177], $g[178], "CLOSE HELP")
				$g[179].setRounded(5, 5)
				$g[179].addEventHandler("eventEE", this, $eh24)
				$g[179].addEventHandler("eventMB", this, $eh25)
				if (!($g[175]==0)) {
					$pc = 31
					continue
				}
				$g[20].setOpacity(0)
				$pc = 31
			case 31:
				$g[62].label.addEventHandler("eventMB", this, $eh26)
				$g[63].label.addEventHandler("eventMB", this, $eh27)
				$g[64].label.addEventHandler("eventMB", this, $eh28)
				$g[65].label.addEventHandler("eventMB", this, $eh29)
				$g[66].label.addEventHandler("eventMB", this, $eh30)
				$g[67].label.addEventHandler("eventMB", this, $eh31)
				$g[61].label.addEventHandler("eventMB", this, $eh32)
				$g[68].addEventHandler("eventMB", this, $eh33)
				$g[53].addEventHandler("eventMB", this, $eh34)
				$g[72].addEventHandler("eventEE", this, $eh35)
				$g[72].addEventHandler("eventMB", this, $eh36)
				callf(234, $obj)
				continue
			case 32:
				returnf(0)
				continue
			case 33:
				enterf(0);	// update
				$obj.vIns=$obj.nIns
				$obj.vRdt=$obj.nRdt
				$obj.vRs1=$obj.nRs1
				$obj.vRs2=$obj.nRs2
				$obj.vIns2=$obj.nIns2
				$obj.vRs3=$obj.nRs3
				$obj.txt=instrText($obj.vIns, $obj.vRdt, $obj.vRs1, $obj.vRs2, $obj.nIns2, $obj.nRs3)
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
				$obj.prev_clock.setPen($obj.stall ? ($obj.type ? $g[46] : $g[44]) : $g[45])
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
				fork(35, $g[75])
				$g[73].setActive($g[75].newValue)
				$pc = 49
			case 49:
				if (wait(8))
				return
				$pc = 50
			case 50:
				if (!(($g[27]==BRANCH_PREDICTION) && (btbIndex($g[75].value)!=-1))) {
					$pc = 51
					continue
				}
				$g[24]=btbIndex($g[75].value)
				$g[75].setNewValue($g[78][$g[24]].value)
				$g[180]=$g[86]
				$pc = 52
				continue
			case 51:
				$g[75].setNewValue(($g[75].value+4)&127)
				$g[180]=$g[88]
				$pc = 52
			case 52:
				$g[96].setNewValue($g[75].value)
				$g[95].setNewInstruction($g[73].instruction[$g[75].value/4])
				if (wait(8))
				return
				$pc = 53
			case 53:
				fork(37, $g[92], 64)
				fork(37, $g[84], 24)
				fork(37, $g[91], 24)
				if (!(($g[27]==BRANCH_PREDICTION) && (instrIsBranch($g[95].vIns)))) {
					$pc = 59
					continue
				}
				if (!($g[23]==CTRL_STALL)) {
					$pc = 55
					continue
				}
				callf(37, $g[90], 12)
				continue
			case 54:
				$pc = 57
				continue
			case 55:
				callf(37, $g[114], 12)
				continue
			case 56:
				$pc = 57
			case 57:
				callf(37, $g[93], 12)
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
				fork(37, $g[82], 40)
				if (!(($g[27]==BRANCH_PREDICTION) && (btbIndex($g[75].value)!=-1))) {
					$pc = 62
					continue
				}
				$g[77][btbIndex($g[75].value)].highlight($g[21])
				$g[78][btbIndex($g[75].value)].highlight($g[21])
				$pc = 62
			case 62:
				$g[83].setTxt($g[95].getNewInstrTxt())
				if ($g[83].setOpacity(1, 16, 1, 1))
				return
				$pc = 63
			case 63:
				callf(37, $g[180], 16)
				continue
			case 64:
				callf(37, $g[89], 8)
				continue
			case 65:
				returnf(0)
				continue
			case 66:
				enterf(0);	// sendBTBOperands
				callf(37, $g[182], 18)
				continue
			case 67:
				callf(37, $g[127], 6)
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
				fork(35, $g[96])
				fork(33, $g[95])
				$pc = 70
			case 70:
				if (!($g[25] && ($g[27]==BRANCH_PREDICTION))) {
					$pc = 71
					continue
				}
				fork(35, $g[77][$g[24]])
				fork(35, $g[78][$g[24]])
				$pc = 71
			case 71:
				if (wait(16))
				return
				$pc = 72
			case 72:
				fork(37, $g[94], 64)
				if (!(instrIsBranch($g[95].vIns))) {
					$pc = 75
					continue
				}
				fork(37, $g[116], 16)
				fork(37, $g[118], 16)
				fork(37, $g[117], 16)
				fork(37, $g[119], 16)
				if (wait(12))
				return
				$pc = 73
			case 73:
				$g[120].setTxt("%02X", $g[95].vRs2)
				$g[120].setOpacity(1)
				if (wait(4))
				return
				$pc = 74
			case 74:
				fork(37, $g[121], 8)
				fork(37, $g[123], 8)
				$g[122].setTxt("%02X", ($g[96].value+4)&255)
				$g[122].setOpacity(1, 8, 1, 0)
				$g[124].setTxt("%02X", ($g[96].value+$g[95].vRs2)&255)
				$g[124].setOpacity(1, 8, 1, 0)
				$pc = 80
				continue
			case 75:
				if (!($g[95].vIns==BL)) {
					$pc = 77
					continue
				}
				fork(37, $g[116], 32)
				fork(37, $g[118], 32)
				if (wait(24))
				return
				$pc = 76
			case 76:
				$pc = 79
				continue
			case 77:
				if (wait(24))
				return
				$pc = 78
			case 78:
				$pc = 79
			case 79:
				$pc = 80
			case 80:
				if (wait(9))
				return
				$pc = 81
			case 81:
				if (!(instrIsBranch($g[95].vIns))) {
					$pc = 82
					continue
				}
				calcNewPC()
				$pc = 82
			case 82:
				if (!(instrIsBranch($g[95].vIns))) {
					$pc = 83
					continue
				}
				$g[126].setTxt("%02X", $g[184])
				$g[126].setOpacity(1, 8, 1, 0)
				$pc = 83
			case 83:
				if (!(instrIsBranch($g[95].vIns))) {
					$pc = 84
					continue
				}
				fork(66, $obj)
				$pc = 84
			case 84:
				detectStall()
				if (!(instrIsBranch($g[95].vIns) && ($g[23]!=DATA_STALL))) {
					$pc = 85
					continue
				}
				updBTB()
				$pc = 85
			case 85:
				if (!($g[23]==NO_STALL)) {
					$pc = 86
					continue
				}
				$g[135].setNewValue($g[95].vIns, $g[95].vRdt, $g[95].vRs1, $g[95].vRs2, $g[95].vIns2, $g[95].vRs3)
				$pc = 87
				continue
			case 86:
				$g[135].setNewValue(STALL, 0, 0, 0, STALL, 0)
				$pc = 87
			case 87:
				if (wait(7))
				return
				$pc = 88
			case 88:
				if (!(instrOpTypeRdt($g[95].vIns)==OP_TYPE_REG)) {
					$pc = 94
					continue
				}
				$g[97][$g[95].vRs1].highlight($g[21])
				$g[136].setNewValue($g[97][$g[95].vRs1].value)
				if (!(instrOpTypeRs2($g[95].vIns)==OP_TYPE_REG)) {
					$pc = 89
					continue
				}
				$g[97][$g[95].vRs2].highlight($g[21])
				$g[137].setNewValue($g[97][$g[95].vRs2].value)
				$pc = 90
				continue
			case 89:
				$g[97][$g[95].vRdt].highlight($g[21])
				$g[137].setNewValue($g[97][$g[95].vRdt].value)
				$pc = 90
			case 90:
				$g[134].setTxt("R%d:%02X", $g[95].vRs1, $g[97][$g[95].vRs1].value)
				$g[134].setOpacity(1)
				fork(37, $g[133], 24)
				if (!((!instrIsArRI($g[95].vIns)) && ($g[95].vIns!=LDR))) {
					$pc = 93
					continue
				}
				$stack[$fp+1] = ($g[95].vIns==STR) ? $g[95].vRdt : $g[95].vRs2
				$g[132].setTxt("R%d:%02X", $stack[$fp+1], $g[97][$stack[$fp+1]].value)
				$g[132].setOpacity(1)
				callf(37, $g[131], 18)
				continue
			case 91:
				callf(37, $g[130], 6)
				continue
			case 92:
				$pc = 93
			case 93:
				$pc = 94
			case 94:
				returnf(0)
				continue
			case 95:
				enterf(6);	// exExec
				fork(33, $g[135])
				if (!(!instrIsNop($g[135].nIns))) {
					$pc = 96
					continue
				}
				fork(35, $g[136])
				fork(35, $g[137])
				$pc = 96
			case 96:
				if (wait(8))
				return
				$pc = 97
			case 97:
				$g[157].setNewValue($g[135].vIns, $g[135].vRdt, $g[135].vRs1, $g[135].vRs2, $g[135].vIns2, $g[135].vRs3)
				if (!(instrOpTypeRdt($g[135].vIns)==OP_TYPE_REG)) {
					$pc = 115
					continue
				}
				if (!($g[29]==ALU_FORWARDING)) {
					$pc = 102
					continue
				}
				if (!($g[158].tagMatches($g[135].vRs1))) {
					$pc = 98
					continue
				}
				$stack[$fp+1]=$g[143]
				$stack[$fp+4]=$g[158].value
				$pc = 101
				continue
			case 98:
				if (!($g[169].tagMatches($g[135].vRs1))) {
					$pc = 99
					continue
				}
				$stack[$fp+1]=$g[144]
				$stack[$fp+4]=$g[169].value
				$pc = 100
				continue
			case 99:
				$stack[$fp+1]=$g[145]
				$stack[$fp+4]=$g[136].value
				$pc = 100
			case 100:
				$pc = 101
			case 101:
				$pc = 103
				continue
			case 102:
				$stack[$fp+1]=$g[145]
				$stack[$fp+4]=$g[136].value
				$pc = 103
			case 103:
				if (!(instrOpTypeRs2($g[135].vIns)==OP_TYPE_IMM)) {
					$pc = 104
					continue
				}
				$stack[$fp+2]=$g[147]
				$stack[$fp+5]=$g[135].vRs2
				$pc = 111
				continue
			case 104:
				if (!($g[29]==ALU_FORWARDING)) {
					$pc = 109
					continue
				}
				if (!($g[158].tagMatches($g[135].vRs2))) {
					$pc = 105
					continue
				}
				$stack[$fp+2]=$g[150]
				$stack[$fp+5]=$g[158].value
				$pc = 108
				continue
			case 105:
				if (!($g[169].tagMatches($g[135].vRs2))) {
					$pc = 106
					continue
				}
				$stack[$fp+2]=$g[149]
				$stack[$fp+5]=$g[169].value
				$pc = 107
				continue
			case 106:
				$stack[$fp+2]=$g[146]
				$stack[$fp+5]=$g[137].value
				$pc = 107
			case 107:
				$pc = 108
			case 108:
				$pc = 110
				continue
			case 109:
				$stack[$fp+2]=$g[146]
				$stack[$fp+5]=$g[137].value
				$pc = 110
			case 110:
				$pc = 111
			case 111:
				new Register(0, 0, 108, 44, LEFT, "PC")
				$stack[$fp+6] = instrExecute($g[135].vIns, $stack[$fp+4], $stack[$fp+5], $g[98].n, $g[98].z, $g[98].c, $g[98].v)
				if (!($g[135].vRdt==0)) {
					$pc = 112
					continue
				}
				$stack[$fp+6]=0
				$pc = 112
			case 112:
				$g[158].setNewValue($stack[$fp+6])
				if (!(instrIsLoadOrStore($g[135].vIns))) {
					$pc = 113
					continue
				}
				$g[158].setNewTag(-1)
				$pc = 114
				continue
			case 113:
				$g[158].setNewTag($g[135].vRdt)
				$pc = 114
			case 114:
				$g[158].setInvalid(0)
				$pc = 117
				continue
			case 115:
				if (!($g[135].vIns==NOP)) {
					$pc = 116
					continue
				}
				$g[158].setInvalid(1)
				$g[158].updateLabel()
				$pc = 116
			case 116:
				$pc = 117
			case 117:
				if (!($g[135].vIns==STR)) {
					$pc = 124
					continue
				}
				if (!($g[30]==FORWARDING_TO_SMDR)) {
					$pc = 122
					continue
				}
				if (!($g[158].tagMatches($g[135].vRdt))) {
					$pc = 118
					continue
				}
				$stack[$fp+3]=$g[151]
				$g[159].setNewValue($g[158].value)
				$pc = 121
				continue
			case 118:
				if (!($g[169].tagMatches($g[135].vRdt))) {
					$pc = 119
					continue
				}
				$stack[$fp+3]=$g[152]
				$g[159].setNewValue($g[169].value)
				$pc = 120
				continue
			case 119:
				$stack[$fp+3]=$g[153]
				$g[159].setNewValue($g[137].value)
				$pc = 120
			case 120:
				$pc = 121
			case 121:
				$pc = 123
				continue
			case 122:
				$stack[$fp+3]=$g[153]
				$g[159].setNewValue($g[137].value)
				$pc = 123
			case 123:
				$pc = 124
			case 124:
				if (wait(8))
				return
				$pc = 125
			case 125:
				fork(37, $g[142], 64)
				if (!($g[135].vIns==STR)) {
					$pc = 126
					continue
				}
				fork(37, $stack[$fp+3], 24)
				$pc = 126
			case 126:
				if (!(instrOpTypeRdt($g[135].vIns)==OP_TYPE_REG)) {
					$pc = 129
					continue
				}
				if (!($stack[$fp+1]!=0)) {
					$pc = 127
					continue
				}
				fork(37, $stack[$fp+1], 24)
				$pc = 127
			case 127:
				if (!($stack[$fp+2]==$g[147])) {
					$pc = 128
					continue
				}
				$g[148].setTxt("%02X", $stack[$fp+5])
				$g[148].setOpacity(1)
				$pc = 128
			case 128:
				fork(37, $stack[$fp+2], 24)
				$pc = 129
			case 129:
				if (wait(24))
				return
				$pc = 130
			case 130:
				if (!($g[135].vIns==STR)) {
					$pc = 131
					continue
				}
				fork(37, $g[154], 40)
				$pc = 131
			case 131:
				if (!(instrOpTypeRdt($g[135].vIns)==OP_TYPE_REG)) {
					$pc = 134
					continue
				}
				$g[141].setTxtOp($g[135].vIns)
				if (!($stack[$fp+1]!=0)) {
					$pc = 132
					continue
				}
				fork(37, $g[155], 40)
				$pc = 132
			case 132:
				fork(37, $g[156], 40)
				if (wait(20))
				return
				$pc = 133
			case 133:
				$g[141].txtResult.setTxt("%02X", $stack[$fp+6])
				$g[141].txtResult.setOpacity(1, 20, 1, 0)
				$pc = 134
			case 134:
				returnf(0)
				continue
			case 135:
				enterf(0);	// maExec
				fork(33, $g[157])
				if (!(instrOpTypeRdt($g[157].nIns)==OP_TYPE_REG)) {
					$pc = 136
					continue
				}
				fork(35, $g[158])
				$pc = 136
			case 136:
				if (!($g[157].nIns==STR)) {
					$pc = 137
					continue
				}
				fork(35, $g[159])
				$pc = 137
			case 137:
				if (wait(8))
				return
				$pc = 138
			case 138:
				$g[168].setNewValue($g[157].vIns, $g[157].vRdt, $g[157].vRs1, $g[157].vRs2, $g[157].vIns2, $g[157].vRs3)
				if (!((instrOpTypeRdt($g[157].vIns)==OP_TYPE_REG) && ($g[157].vIns!=STR))) {
					$pc = 141
					continue
				}
				if (!($g[157].vIns==LDR)) {
					$pc = 139
					continue
				}
				$g[169].setNewValue($g[160][$g[158].value%4].value)
				$g[169].setNewTag($g[157].vRdt)
				$pc = 140
				continue
			case 139:
				$g[169].setNewValue($g[158].value)
				$g[169].setNewTag($g[158].tag)
				$pc = 140
			case 140:
				$g[169].setInvalid(0)
				$pc = 141
			case 141:
				if (wait(8))
				return
				$pc = 142
			case 142:
				fork(37, $g[162], 64)
				if (!($g[157].vIns==STR)) {
					$pc = 145
					continue
				}
				$g[160][$g[158].value%4].setNewValue($g[159].value)
				fork(37, $g[166], 24)
				callf(37, $g[165], 24)
				continue
			case 143:
				callf(35, $g[160][$g[158].value%4])
				continue
			case 144:
				$pc = 153
				continue
			case 145:
				if (!(instrOpTypeRdt($g[157].vIns)==OP_TYPE_REG)) {
					$pc = 152
					continue
				}
				if (!($g[157].vIns==LDR)) {
					$pc = 148
					continue
				}
				callf(37, $g[165], 24)
				continue
			case 146:
				$g[160][$g[158].value%4].highlight($g[21])
				callf(37, $g[167], 24)
				continue
			case 147:
				$pc = 150
				continue
			case 148:
				callf(37, $g[163], 48)
				continue
			case 149:
				$pc = 150
			case 150:
				callf(37, $g[164], 16)
				continue
			case 151:
				$pc = 152
			case 152:
				$pc = 153
			case 153:
				returnf(0)
				continue
			case 154:
				enterf(0);	// wbExec
				fork(33, $g[168])
				if (!((instrOpTypeRdt($g[168].nIns)==OP_TYPE_REG) && ($g[168].nIns!=STR))) {
					$pc = 155
					continue
				}
				fork(35, $g[169])
				$pc = 155
			case 155:
				if (wait(8))
				return
				$pc = 156
			case 156:
				if (!((instrOpTypeRdt($g[168].vIns)==OP_TYPE_REG) && ($g[168].vIns!=STR))) {
					$pc = 161
					continue
				}
				$g[97][$g[169].tag].setNewValue($g[169].value)
				if (wait(8))
				return
				$pc = 157
			case 157:
				callf(37, $g[170], 24)
				continue
			case 158:
				callf(35, $g[97][$g[169].tag])
				continue
			case 159:
				if (wait(19))
				return
				$pc = 160
			case 160:
				$pc = 163
				continue
			case 161:
				if (wait(67))
				return
				$pc = 162
			case 162:
				$pc = 163
			case 163:
				if (!($g[168].vIns!=STALL && $g[168].vIns!=EMPTY)) {
					$pc = 164
					continue
				}
				$g[33]++
				$g[70].setTxt("%4d", $g[33])
				$pc = 164
			case 164:
				$g[34]++
				$g[71].setTxt("%4d", $g[34])
				returnf(0)
				continue
			case 165:
				enterf(0);	// nonPipelinedBranch
				fork(37, $g[118], 24)
				fork(37, $g[119], 24)
				callf(37, $g[92], 12)
				continue
			case 166:
				fork(37, $g[116], 12)
				fork(37, $g[117], 12)
				if (wait(12))
				return
				$pc = 167
			case 167:
				if (!(instrIsBranch($g[95].vIns))) {
					$pc = 173
					continue
				}
				if (!(($g[97][$g[95].vRs1].value==0)==($g[95].vIns==B))) {
					$pc = 169
					continue
				}
				callf(37, $g[123], 20)
				continue
			case 168:
				$g[75].setNewValue(($g[75].value+$g[95].vRs2)&127)
				$pc = 171
				continue
			case 169:
				callf(37, $g[121], 20)
				continue
			case 170:
				$g[75].setNewValue(($g[75].value+4)&127)
				$pc = 171
			case 171:
				callf(37, $g[85], 14)
				continue
			case 172:
				$pc = 176
				continue
			case 173:
				$g[75].setNewValue(($g[75].value+4)&127)
				callf(37, $g[121], 20)
				continue
			case 174:
				callf(37, $g[85], 14)
				continue
			case 175:
				$pc = 176
			case 176:
				callf(37, $g[89], 6)
				continue
			case 177:
				returnf(0)
				continue
			case 178:
				enterf(5);	// execNonPipelined
				callf(35, $g[75])
				continue
			case 179:
				$g[73].setActive($g[75].newValue)
				callf(37, $g[84], 24)
				continue
			case 180:
				callf(37, $g[82], 40)
				continue
			case 181:
				$g[95].setNewInstruction($g[73].instruction[$g[75].value/4])
				$g[83].setTxt($g[95].getNewInstrTxt())
				$g[83].translate(60/2+70, 0, 20, 1, 0)
				callf(33, $g[95])
				continue
			case 182:
				if (!((instrOpTypeRs2($g[95].vIns)==OP_TYPE_IMM) && (instrOpTypeRdt($g[95].vIns)==OP_TYPE_REG))) {
					$pc = 183
					continue
				}
				fork(37, $g[94], 64)
				$pc = 183
			case 183:
				fork(165, $obj)
				if (wait(24))
				return
				$pc = 184
			case 184:
				if (!(instrOpTypeRdt($g[95].vIns)==OP_TYPE_REG)) {
					$pc = 193
					continue
				}
				$stack[$fp+1]=$g[97][$g[95].vRs1].value
				$g[97][$g[95].vRs1].highlight($g[21])
				$g[134].setTxt("R%d:%02X", $g[95].vRs1, $g[97][$g[95].vRs1].value)
				$g[134].setOpacity(1)
				fork(37, $g[133], 40)
				if (!((instrOpTypeRs2($g[95].vIns)==OP_TYPE_REG) || ($g[95].vIns==STR))) {
					$pc = 190
					continue
				}
				if (!(instrOpTypeRs2($g[95].vIns)==OP_TYPE_IMM)) {
					$pc = 185
					continue
				}
				$stack[$fp+2]=$g[97][$g[95].vRdt].value
				$g[97][$g[95].vRdt].highlight($g[21])
				$pc = 186
				continue
			case 185:
				$stack[$fp+2]=$g[97][$g[95].vRs2].value
				$g[97][$g[95].vRs2].highlight($g[21])
				$pc = 186
			case 186:
				if (!((!instrIsArRI($g[95].vIns)) && ($g[95].vIns!=LDR))) {
					$pc = 189
					continue
				}
				$stack[$fp+5] = ($g[95].vIns==STR) ? $g[95].vRdt : $g[95].vRs2
				$g[132].setTxt("R%d:%02X", $stack[$fp+5], $g[97][$stack[$fp+5]].value)
				$g[132].setOpacity(1)
				callf(37, $g[131], 20)
				continue
			case 187:
				callf(37, $g[130], 20)
				continue
			case 188:
				$pc = 189
			case 189:
				$pc = 192
				continue
			case 190:
				if (wait(40))
				return
				$pc = 191
			case 191:
				$pc = 192
			case 192:
				$pc = 195
				continue
			case 193:
				if (wait(40))
				return
				$pc = 194
			case 194:
				$pc = 195
			case 195:
				if (!(instrOpTypeRdt($g[95].vIns)==OP_TYPE_REG)) {
					$pc = 196
					continue
				}
				$g[141].setTxtOp($g[95].vIns)
				$pc = 196
			case 196:
				if (!($g[95].vIns==STR)) {
					$pc = 199
					continue
				}
				fork(37, $g[153], 40)
				fork(37, $g[145], 40)
				$g[148].setTxt("%02X", $g[95].vRs2)
				$g[148].setOpacity(1)
				callf(37, $g[147], 40)
				continue
			case 197:
				fork(37, $g[154], 40)
				fork(37, $g[156], 40)
				callf(37, $g[155], 40)
				continue
			case 198:
				$stack[$fp+4]=$stack[$fp+2]
				$stack[$fp+3]=instrExecute($g[95].vIns, $stack[$fp+1], $g[95].vRs2, $g[98].n, $g[98].z, $g[98].c, $g[98].v)
				$pc = 208
				continue
			case 199:
				if (!(instrOpTypeRdt($g[95].vIns)==OP_TYPE_REG)) {
					$pc = 205
					continue
				}
				fork(37, $g[145], 40)
				if (!(instrOpTypeRs2($g[95].vIns)==OP_TYPE_IMM)) {
					$pc = 201
					continue
				}
				$g[148].setTxt("%02X", $g[95].vRs2)
				$g[148].setOpacity(1)
				callf(37, $g[147], 40)
				continue
			case 200:
				$stack[$fp+3]=instrExecute($g[95].vIns, $stack[$fp+1], $g[95].vRs2, $g[98].n, $g[98].z, $g[98].c, $g[98].v)
				$pc = 203
				continue
			case 201:
				callf(37, $g[146], 40)
				continue
			case 202:
				$stack[$fp+3]=instrExecute($g[95].vIns, $stack[$fp+1], $stack[$fp+2], $g[98].n, $g[98].z, $g[98].c, $g[98].v)
				$pc = 203
			case 203:
				fork(37, $g[156], 40)
				callf(37, $g[155], 40)
				continue
			case 204:
				$pc = 207
				continue
			case 205:
				if (wait(80))
				return
				$pc = 206
			case 206:
				$pc = 207
			case 207:
				$pc = 208
			case 208:
				if (!($g[95].vIns==LDR)) {
					$pc = 212
					continue
				}
				callf(37, $g[165], 20)
				continue
			case 209:
				$g[160][($stack[$fp+3])%4].highlight($g[21])
				callf(37, $g[167], 20)
				continue
			case 210:
				callf(37, $g[164], 40)
				continue
			case 211:
				$stack[$fp+3]=$g[160][($stack[$fp+3])%4].value
				$pc = 222
				continue
			case 212:
				if (!($g[95].vIns==STR)) {
					$pc = 215
					continue
				}
				fork(37, $g[166], 20)
				callf(37, $g[165], 20)
				continue
			case 213:
				$g[160][($stack[$fp+3])%4].setNewValue($stack[$fp+4])
				callf(35, $g[160][($stack[$fp+3])%4])
				continue
			case 214:
				$pc = 221
				continue
			case 215:
				if (!(instrOpTypeRdt($g[95].vIns)==OP_TYPE_REG)) {
					$pc = 218
					continue
				}
				callf(37, $g[163], 40)
				continue
			case 216:
				callf(37, $g[164], 40)
				continue
			case 217:
				$pc = 220
				continue
			case 218:
				if (wait(80))
				return
				$pc = 219
			case 219:
				$pc = 220
			case 220:
				$pc = 221
			case 221:
				$pc = 222
			case 222:
				$g[97][0].unHighlight()
				$g[97][1].unHighlight()
				$g[97][2].unHighlight()
				$g[97][3].unHighlight()
				if (!((instrOpTypeRdt($g[95].vIns)==OP_TYPE_REG) && ($g[95].vIns!=STR))) {
					$pc = 226
					continue
				}
				callf(37, $g[170], 40)
				continue
			case 223:
				$g[97][$g[95].vRdt].setNewValue($stack[$fp+3])
				callf(35, $g[97][$g[95].vRdt])
				continue
			case 224:
				if (wait(19))
				return
				$pc = 225
			case 225:
				$pc = 228
				continue
			case 226:
				if (wait(75))
				return
				$pc = 227
			case 227:
				$pc = 228
			case 228:
				$g[34]+=5
				$g[33]++
				$g[70].setTxt("%4d", $g[33])
				$g[71].setTxt("%4d", $g[34])
				returnf(0)
				continue
			case 229:
				enterf(0);	// exec
				$g[97][0].unHighlight()
				$g[97][1].unHighlight()
				$g[97][2].unHighlight()
				$g[97][3].unHighlight()
				$g[160][0].unHighlight()
				$g[160][1].unHighlight()
				$g[160][2].unHighlight()
				$g[160][3].unHighlight()
				$g[77][0].unHighlight()
				$g[77][1].unHighlight()
				$g[78][0].unHighlight()
				$g[78][1].unHighlight()
				if (!($g[26]==PIPELINING_ENABLED)) {
					$pc = 230
					continue
				}
				fork(48, $obj)
				fork(69, $obj)
				fork(95, $obj)
				fork(135, $obj)
				fork(154, $obj)
				$pc = 231
				continue
			case 230:
				fork(178, $obj)
				$pc = 231
			case 231:
				if (wait(8))
				return
				$pc = 232
			case 232:
				resetWires()
				if (wait(($g[26]==PIPELINING_ENABLED) ? 72 : 392))
				return
				$pc = 233
			case 233:
				checkPoint()
				returnf(0)
				continue
			case 234:
				enterf(0);	// run
				if (wait(1))
				return
				$pc = 235
			case 235:
				$g[32]=1
				setlocked()
				$pc = 236
			case 236:
				if (!(1)) {
					$pc = 241
					continue
				}
				fork(43, $g[74], ($g[26]==PIPELINING_ENABLED) ? 80 : 400)
				callf(229, $obj)
				continue
			case 237:
				if (!((($g[168].vIns==HALT) && ($g[26]==PIPELINING_ENABLED)) || (($g[95].vIns==HALT) && ($g[26]==PIPELINING_DISABLED)))) {
					$pc = 239
					continue
				}
				stop()
				if (!($g[174])) {
					$pc = 238
					continue
				}
				$pc = 241
				continue
				$pc = 238
			case 238:
				$pc = 239
			case 239:
				if (wait(1))
				return
				$pc = 240
			case 240:
				$pc = 236
				continue
			case 241:
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
