/*Listado de arquitecturas disponibles*/
var architecture_available = [];

/*Almacena el color de fondo de cada card*/
var back_card = [];

/*tabla hash de la arquitectura*/
var architecture_hash = [];

/*Arquitectura cargada*/
var architecture = {components:[
  /*{name: "Integer control registers", type: "control", double_precision: false, elements:[
      {name:"PC", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"EPC", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"CAUSE", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"BADVADDR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"STATUS", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"HI", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"LO", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    ]},
    {name: "Integer registers", type: "integer", double_precision: false, elements:[
      {name:"r0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"at", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"v0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"v1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"a0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"a1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"a2", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"a3", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t2", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t3", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t4", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t5", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t6", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t7", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s2", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s3", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s4", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s5", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s6", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s7", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t8", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"t9", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"k0", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"k1", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"gp", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"sp", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"s8", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"ra", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    ]},
    {name: "Floating point control registers", type: "control", double_precision: false, elements:[
      {name:"FIR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"FCSR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"FCCR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
      {name:"FEXR", nbits:"32", value:0, default_value:0, properties: ["read", "write"]},
    ]},
    {name: "Simple floating point registers",type: "floating point", double_precision: false, elements:[
      {name:"FG0", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG1", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG2", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG3", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG4", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG5", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG6", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG7", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG8", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG9", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG10", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG11", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG12", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG13", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG14", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG15", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG16", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG17", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG18", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG19", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG20", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG21", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG22", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG23", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG24", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG25", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG26", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG27", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG28", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG29", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG30", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
      {name:"FG31", nbits:"32", value:0.0, default_value:0.0, properties: ["read", "write"]},
    ]},
    {name: "Double floating point registers", type: "floating point", double_precision: true, elements:[
      {name:"FP0", nbits:"64", value:0.0, simple_reg: ["FG0","FG1"], properties: ["read", "write"]},
      {name:"FP2", nbits:"64", value:0.0, simple_reg: ["FG2","FG3"], properties: ["read", "write"]},
      {name:"FP4", nbits:"64", value:0.0, simple_reg: ["FG4","FG5"], properties: ["read", "write"]},
      {name:"FP6", nbits:"64", value:0.0, simple_reg: ["FG6","FG7"], properties: ["read", "write"]},
      {name:"FP8", nbits:"64", value:0.0, simple_reg: ["FG8","FG9"], properties: ["read", "write"]},
      {name:"FP10", nbits:"64", value:0.0, simple_reg: ["FG10","FG11"], properties: ["read", "write"]},
      {name:"FP12", nbits:"64", value:0.0, simple_reg: ["FG12","FG13"], properties: ["read", "write"]},
      {name:"FP14", nbits:"64", value:0.0, simple_reg: ["FG14","FG15"], properties: ["read", "write"]},
      {name:"FP16", nbits:"64", value:0.0, simple_reg: ["FG16","FG17"], properties: ["read", "write"]},
      {name:"FP18", nbits:"64", value:0.0, simple_reg: ["FG18","FG19"], properties: ["read", "write"]},
      {name:"FP20", nbits:"64", value:0.0, simple_reg: ["FG20","FG21"], properties: ["read", "write"]},
      {name:"FP22", nbits:"64", value:0.0, simple_reg: ["FG22","FG23"], properties: ["read", "write"]},
      {name:"FP24", nbits:"64", value:0.0, simple_reg: ["FG24","FG25"], properties: ["read", "write"]},
      {name:"FP26", nbits:"64", value:0.0, simple_reg: ["FG26","FG27"], properties: ["read", "write"]},
      {name:"FP28", nbits:"64", value:0.0, simple_reg: ["FG28","FG29"], properties: ["read", "write"]},
      {name:"FP30", nbits:"64", value:0.0, simple_reg: ["FG30","FG31"], properties: ["read", "write"]},
    ]}*/
  ], instructions:[
    /*{name: "add", co: "000000", cop: "100000", nwords: 1, signature: "add,reg,reg,reg", signatureRaw: "add reg1 reg2 reg3", fields: [
      {name: "add", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2+reg3\nPC=PC+4"},
    {name: "addi", co: "001000", cop: null, nwords: 1, signature: "addi,reg,reg,inm", signatureRaw: "addi reg1 reg2 val", fields: [
      {name: "addi", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=reg2+val\nPC=PC+4"},
    {name: "and", co: "000000", cop: "100100", nwords: 1, signature: "and,reg,reg,reg", signatureRaw: "and reg1 reg2 reg3", fields: [
      {name: "and", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2&reg3\nPC=PC+4"},
    {name: "andi", co: "001100", cop: null, nwords: 1, signature: "andi,reg,reg,inm", signatureRaw: "andi reg1 reg2 val", fields: [
      {name: "andi", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=reg2&val\nPC=PC+4"},
    {name: "b", co: "000100", cop: null, nwords: 1, signature: "b,inm", signatureRaw: "b val", fields: [
      {name: "b", type: "co", startbit: 31, stopbit: 26},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "PC=val"},
    {name: "beq", co: "000100", cop: null, nwords: 1, signature: "beq,reg,reg,inm", signatureRaw: "beq reg1 reg2 val", fields: [
      {name: "beq", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "if(reg1 == reg2){PC=val}\nelse{PC=PC+4}"},
    {name: "bne", co: "000101", cop: null, nwords: 1, signature: "bne,reg,reg,inm", signatureRaw: "bne reg1 reg2 val", fields: [
      {name: "bne", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "if(reg1 != reg2){PC=val}\nelse{PC=PC+4}"},
    {name: "div", co: "000000", cop: "011010", nwords: 1, signature: "div,reg,reg,reg", signatureRaw: "div reg1 reg2 reg3", fields: [
      {name: "div", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2/reg3\nPC=PC+4"},
    {name: "lw", co: "000102", cop: null, nwords: 1, signature: "lw,reg,inm,(reg)", signatureRaw: "lw reg1 val (reg2)", fields: [
      {name: "lw", type: "co", startbit: 31, stopbit: 26},
      {name: "reg2", type: "(reg)", startbit: 25, stopbit: 21},
      {name: "reg1", type: "reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=MP.w.(val+reg2)\nPC=PC+4"},
    {name: "mul", co: "011100", cop: "000010", nwords: 1, signature: "mul,reg,reg,reg", signatureRaw: "mul reg1 reg2 reg3", fields: [
      {name: "mul", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2*reg3\nPC=PC+4"},
    {name: "nop", co: "000000", cop: "000000", nwords: 1, signature: "nop", signatureRaw: "nop", fields: [
      {name: "nop", type: "co", startbit: 31, stopbit: 26},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: ""},
    {name: "or", co: "000000", cop: "100101", nwords: 1, signature: "or,reg,reg,reg", signatureRaw: "or reg1 reg2 reg3", fields: [
      {name: "or", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2|reg3\nPC=PC+4"},
    {name: "ori", co: "001101", cop: null, nwords: 1, signature: "ori,reg,reg,inm", signatureRaw: "ori reg1 reg2 val", fields: [
      {name: "ori", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=reg2|val\nPC=PC+4"},
    {name: "sub", co: "000000", cop: "100010", nwords: 1, signature: "sub,reg,reg,reg", signatureRaw: "sub reg1 reg2 reg3", fields: [
      {name: "sub", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2-reg3\nPC=PC+4"},
    {name: "sw", co: "000103", cop: null, nwords: 1, signature: "sw,reg,inm,(reg)", signatureRaw: "sw reg1 val (reg2)", fields: [
      {name: "sw", type: "co", startbit: 31, stopbit: 26},
      {name: "reg2", type: "(reg)", startbit: 25, stopbit: 21},
      {name: "reg1", type: "reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "MP.w.(val+reg2)=reg1\nPC=PC+4"},
    {name: "xor", co: "000000", cop: "100110", nwords: 1, signature: "xor,reg,reg,reg", signatureRaw: "xor reg1 reg2 reg3", fields: [
      {name: "xor", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "reg3", type: "reg", startbit: 15, stopbit: 11},
      {name: "cop", type: "cop", startbit: 5, stopbit: 0},
    ], definition: "reg1=reg2^reg3\nPC=PC+4"},
    {name: "xori", co: "001110", cop: null, nwords: 1, signature: "xori,reg,reg,inm", signatureRaw: "xori reg1 reg2 val", fields: [
      {name: "xori", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
      {name: "val", type: "inm", startbit: 15, stopbit: 0},
    ], definition: "reg1=reg2^val\nPC=PC+4"},*/
  ],pseudoinstructions:[
    /*{name: "move", co: "000000", cop: "100000", nwords: 1, signature: "move,reg,reg,reg", signatureRaw: "move reg1 reg2 reg3", fields: [
      {name: "move", type: "co", startbit: 31, stopbit: 26},
      {name: "reg1", type: "reg", startbit: 25, stopbit: 21},
      {name: "reg2", type: "reg", startbit: 20, stopbit: 16},
    ], definition: "add reg1 R0 reg2"},*/

  ], directives:[
    /*{name:".kdata", kindof:"segment", size:0 },
    {name:".ktext", kindof:"segment", size:0 },
    {name:".data", kindof:"segment", size:0 },
    {name:".text", kindof:"segment", size:0 },
    {name:".byte", kindof:"datatype", size:1 },
    {name:".half", kindof:"datatype", size:2 },
    {name:".word", kindof:"datatype", size:4 },
    {name:".space", kindof:"datatype", size:1 },
    {name:".ascii", kindof:"datatype", size:1 },
    {name:".asciiz", kindof:"datatype", size:1 },
    {name:".align", kindof:"datatype", size:0 },*/
  ]};

var componentsTypes = [
  { text: 'Integer', value: 'integer' },
  { text: 'Floating point', value: 'floating point' },
  { text: 'Control', value: 'control' },
]

var kindofTypes = [
  { text: 'segment', value: 'segment' },
  { text: 'datatype', value: 'datatype' },
]

memory = [
  {Address: 0x01000, Binary: [
    {Addr: 0x01000, DefBin: "01", Bin: "01", Tag: 'a'},
    {Addr: 0x01001, DefBin: "ff", Bin: "ff", Tag: null},
    {Addr: 0x01002, DefBin: "07", Bin: "07", Tag: null},
    {Addr: 0x01003, DefBin: "0a", Bin: "0a", Tag: 'd'},
  ]},
  {Address: 0x01004, Binary: [
    {Addr: 0x01004, DefBin: "61", Bin: "61", Tag: 'b'},
    {Addr: 0x01005, DefBin: "65", Bin: "65", Tag: null},
    {Addr: 0x01006, DefBin: "6c", Bin: "6c", Tag: 'c'},
    {Addr: 0x01007, DefBin: "50", Bin: "50", Tag: null},
  ]},
]

var  instructions = [

  /*{ Break: null, Address: "0x8000", Label:"" , loaded: "lw R1 0x1000", user: "lw R1 0x1000", _rowVariant: 'success'},
  { Break: null, Address: "0x8000", Label:"" , loaded: "lw R2 b", user: "lw R2 b", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "li R1 0x00001002", user: "li R1 0x00001002", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "lw R2 4 (R1)", user: "lw R2 4 (R1)", _rowVariant: ''},

  { Break: null, Address: "0x8000", Label:"" , loaded: "sw R2 0x1000", user: "sw R2 0x1000", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "sw R1 c", user: "sw R1 c", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "li R1 0x00001000", user: "li R1 0x00001000", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "sw R2 4 (R1)", user: "sw R2 4 (R1)", _rowVariant: ''},

  

  { Break: null, Address: "0x8000", Label:"" , loaded: "li R1 5", user: "li R1 5", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "li FG0 5.5", user: "li FG0 5.5", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "li FP0 50.65", user: "li FP0 50.65", _rowVariant: ''},

  { Break: null, Address: "0x8000", Label:"" , loaded: "addi R1 R2 5", user: "addi R1 R2 5", _rowVariant: '' },
  { Break: null, Address: "0x8000", Label:"" , loaded: "addi FG0 FG2 32.52", user: "addi FG0 R2 32.52", _rowVariant: '' },
  { Break: null, Address: "0x8000", Label:"" , loaded: "addi FP0 FP2 321.321", user: "addi FP0 FP2 321.321", _rowVariant: '' },

  { Break: null, Address: "0x8000", Label:"" , loaded: "and R0 R1 R2", user: "and R0 R1 R2", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "and FG0 FG1 FG2", user: "and FG0 FG1 FG2", _rowVariant: ''},
  { Break: null, Address: "0x8000", Label:"" , loaded: "and FP0 FP2 FP4", user: "and FP0 FP2 FP4", _rowVariant: ''},

  { Break: null, Address: "0x8000", Label:"" , loaded: "add R1 R2 R3", user: "add R1 R2 R3", _rowVariant: '' },
  { Break: null, Address: "0x8000", Label:"" , loaded: "add FG0 FG1 FG2", user: "add FG0 FG1 FG2", _rowVariant: '' },
  { Break: null, Address: "0x8000", Label:"" , loaded: "add FP0 FP2 FP4", user: "add FP0 FP2 FP4", _rowVariant: '' }*/
]

var pending_instructions = [];

/*Indice de compilacion*/
var tokenIndex = 0;
/*Indica que se ha modificado la arquitectura*/
var archChange = false;

/*Indice de ejecucion*/
var executionIndex = 0;

/*Variables que almacenan el codigo introducido*/
var code_assembly = '';

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

function binaryStringToInt( b ) {
    return parseInt(b, 2);
}

window.app = new Vue({
  el: "#app",
  data: {

    /*ALERTA GLOBAL*/
    alertMessaje: '',
    type: '',
    dismissSecs: 3,
    dismissCountDown: 0,

    /*ALERTA MODAL*/
    dismissSecsMod: 3,
    dismissCountDownMod: 0,

    /*PAGINA CARGA ARQUITECTURA*/
    /*Configuraciones Disponibles*/
    arch_available: architecture_available,
    /*Background de cada uno de los cards del menu*/
    back_card: back_card,
    /*Nombre del fichero a cargar*/
    load_arch: '',
    /*Nombre del fichero a guardar*/
    name_arch_save: '',
    /*Numero de bits de la arquitectura*/
    number_bits: 32,
    /*Asingacion de la arquitectura empleada*/
    architecture: architecture,
    /*Tabla hash arquitectura*/
    architecture_hash: architecture_hash,
    /*Listado de tipos de componentes*/
    componentsTypes:componentsTypes,
    /*Listado de registros de coma flotante*/
    simple_reg:[],
    /*Campos de la tabla de componentes*/
    archFields: ['name', 'nbits', 'value', 'default_value', 'properties', 'actions'],
    /*Edicion de la arquitectura*/
    formArchitecture: {
      name: '',
      type: '',
      defValue: '',
      properties: [],
      precision: '',
    },
    /*Reset de la arquitectura*/
    modalResetArch: {
      title: '',
      element: '',
    },
    /*Edicion de un componente*/
    modalEditComponent: {
      title: '',
      element: '',
    },
    /*Borrado de un componente*/
    modalDeletComp:{
      title: '',
      element: '',
    },
    /*Nuevo elemento*/
    modalNewElement:{
      title: '',
      element: '',
      type: '',
      double_precision: '',
      simple1: '',
      simple2: '',
    },
    /*Edicion de un elemento*/
    modalEditElement:{
      title: '',
      element: '',
      type: '',
      double_precision: '',
      simple1: '',
      simple2: '',
    },
    /*Borrado de un elemento*/
    modalDeletElement:{
      title: '',
      element: '',
    },
    /*Nombre de la arquitectura*/
    architecture_name: '',


    /*PAGINA DE INSTRUCCIONES*/
    instFields: ['name', 'co', 'cop', 'nwords', 'signature', 'signatureRaw', 'fields', 'definition', 'actions'],
    /*Edicion de las instrucciones*/
    formInstruction: {
      name: '',
      co: '',
      cop: '',
      nwords: 1,
      numfields: 1,
      nameField: [],
      typeField: [],
      startBitField: [],
      stopBitField: [],
      assignedCop: false,
      definition: '',
    },
    /*Barra de paginas formulario instrucciones*/
    instructionFormPage: 1,
    instructionFormPageLink: ['#Principal', '#Fields', '#Definition'],
    /*Variables para el selector de campos tabla*/
    fieldsSel: '',
    instSel: '',
    /*Reset de las instrucciones*/
    modalResetInst:{
      title: '',
      element: '',
    },
    /*Borrado de una instruccion*/
    modalDeletInst:{
      title: '',
      element: '',
    },
    /*Edicion de una instruccion*/
    modalEditInst:{
      title: '',
      element: '',
      co: '',
      cop: '',
    },
    /*Asignacion de valores de la tabla de instrucciones*/
    archInstructions: ['Break', 'Address', 'Label', 'Loaded Instructions', 'User Instructions'],
    instructions: instructions,


    /*PAGINA DE PSEUDOINSTRUCCIONES*/
    pseudoinstFields: ['name', 'co', 'cop', 'nwords', 'signature', 'signatureRaw', 'fields', 'definition', 'actions'],
    /*Reset de las instrucciones*/
    modalResetPseudoinst:{
      title: '',
      element: '',
    },
    /*Borrado de una instruccion*/
    modalDeletPseudoinst:{
      title: '',
      element: '',
    },
    /*Edicion de una instruccion*/
    modalEditPseudoinst:{
      title: '',
      element: '',
      co: '',
      cop: '',
    },

    /*PAGINA DE DIRECTIVAS*/
    directivesFields: ['name', 'kindof', 'size', 'actions'],

    formDirective:{
      name: '',
      kindof: '',
      size: 0,
    },
    /*Reset de la arquitectura*/
    modalResetDir: {
      title: '',
      element: '',
    },
    modalDeletDir:{
      title: '',
      element: '',
    },
    /*Listado de tipos de componentes*/
    kindofTypes:kindofTypes,

    modalEditDirective:{
      title: '',
      element: '',
    },


    /*MEMORIA*/
    /*Campos tabla memoria*/
    memFields: ['Address', 'Binary', 'Value'],
    /*Asignacion de valores de la tabla de memoria*/
    memory: memory,


    /*CARGA Y LECTURA ENSAMBLADOR*/
    /*Variables donde se guardan los contenidos de los textarea*/
    text_assembly: code_assembly,
    /*Variables donde se guardan los ficheros cargados*/
    load_assembly: '',
    /*Variables donde se guardan los nombre de los ficheros guardados*/
    save_assembly: '',


    /*PAGINA SIMULADOR*/
    /*Nuevo valor del registro*/
    newValue: '',
    /*Registros a mostrar*/
    register_type: 'integer',
    
  },
  computed: {
    
  },
  methods:{
    /*ALERTA GLOBAL*/
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    /*ALERTA MODAL*/
    countDownChangedMod (dismissCountDown) {
      this.dismissCountDownMod = dismissCountDown;
    },

    /*Nombres de barra de paginacion*/
    linkGen (pageNum) {
      return this.instructionFormPageLink[pageNum - 1]
    },
    pageGen (pageNum) {
      return this.instructionFormPageLink[pageNum - 1].slice(1)
    },

    /*VALIDADOR FORMULARIOS*/
    valid(value){
      for (var i = 0; i <this.formInstruction.typeField.length; i++) {
        if(this.formInstruction.typeField[i]=='cop'){
          this.formInstruction.assignedCop = true;
          break;
        }
        if(i == this.formInstruction.typeField.length-1){
          this.formInstruction.assignedCop = false;
        }
      }

      if(parseInt(value) != 0){
        if(!value){
          return false;
        }
        else{
          return true;
        }
      }
      else{
        return true;
      }
    },

    /*PAGINA CARGA ARQUITECTURA*/
    /*Carga las arquitecturas que hay disponibles*/
    load_arch_available(){
      $.getJSON('architecture/available_arch.json', function(cfg){
        architecture_available = cfg;
        app._data.arch_available = cfg;

        for (var i = 0; i < architecture_available.length; i++) {
          back_card.push({name: architecture_available[i].name , background: "default"});
        }
      })
    },

    /*Cambia el background del card seleccionado*/
    change_background(name, type){
      if(type == 1){
        for (var i = 0; i < back_card.length; i++) {
          if(name == back_card[i].name){
            back_card[i].background = "secondary";
          }
          else{
            back_card[i].background = "default";
          }
        }
      }
      if(type == 0){
        for (var i = 0; i < back_card.length; i++) {
          back_card[i].background = "default";
        }
      }
    },

    /*Carga la arquitectura seleccionada*/
    load_arch_select(e){
      $.getJSON('architecture/'+e+'.json', function(cfg){
        architecture = cfg;
        app._data.architecture = architecture;

        architecture_hash = [];
        for (var i = 0; i < architecture.components.length; i++) {
          architecture_hash.push({name: architecture.components[i].name, index: i}); 
          app._data.architecture_hash = architecture_hash;
        }

        app._data.architecture_name = e;

        $("#architecture_menu").hide();
        $("#simulator").show();
        $("#assembly_btn_arch").show();
        $("#sim_btn_arch").show();
        $("#load_arch").hide();
        $("#load_menu_arch").hide();
        $("#view_components").show();

        app._data.alertMessaje = 'The selected architecture has been loaded correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
      });
    },

    /*Lectura del JSON de la arquitectura seleccionada*/
    read_arch(e){
      var file;
      var reader;
      var files = document.getElementById('arch_file').files;

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        reader = new FileReader();
        reader.onloadend = onFileLoaded;
        reader.readAsBinaryString(file);
      }

      function onFileLoaded(event) {
        architecture = JSON.parse(event.currentTarget.result);

        app._data.architecture = architecture;

        architecture_hash = [];
        for (var i = 0; i < architecture.components.length; i++) {
          architecture_hash.push({name: architecture.components[i].name, index: i}); 
          app._data.architecture_hash = architecture_hash;
        }

        $("#architecture_menu").hide();
        $("#simulator").show();
        $("#assembly_btn_arch").show();
        $("#sim_btn_arch").show();
        $("#load_arch").hide();
        $("#load_menu_arch").hide();
        $("#view_components").show();
        
        app._data.alertMessaje = 'The selected architecture has been loaded correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
      }
    },

    /*Guarda la arquitectura actual en un JSON*/
    arch_save(){
      var textToWrite = JSON.stringify(architecture, null, 2);
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/json' });
      var fileNameToSaveAs;

      if(this.name_arch_save == ''){
        fileNameToSaveAs = "architecture.json";
      }
      else{
        fileNameToSaveAs = this.name_arch_save + ".json";
      }

      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "My Hidden Link";

      window.URL = window.URL || window.webkitURL;

      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
      app._data.alertMessaje = 'Save architecture';
      app._data.type ='success';
      app._data.dismissCountDown = app._data.dismissSecs;
    },

    /*Modal de alerta de reset*/
    resetArchModal(elem, button){
      this.modalResetArch.title = "Reset " + elem + " architecture";
      this.modalResetArch.element = elem;
      this.$root.$emit('bv::show::modal', 'modalResetArch', button);
    },

    /*Resetea la arquitectura*/
    resetArchitecture(arch){
      $.getJSON('architecture/'+arch+'.json', function(cfg){
        architecture.components = cfg.components;
        app._data.architecture = architecture;

        architecture_hash = [];
        for (var i = 0; i < architecture.components.length; i++) {
          architecture_hash.push({name: architecture.components[i].name, index: i}); 
          app._data.architecture_hash = architecture_hash;
        }

        app._data.alertMessaje = 'The architecture has been reset correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
      });
    },

    /*Comprueba que estan todos los campos del formulario de nuevo componente*/
    newComponentVerify(evt){
      evt.preventDefault();
      if (!this.formArchitecture.name || !this.formArchitecture.type) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.newComponent()
      }
    },

    /*Crea un nuevo componente*/
    newComponent(){
      for (var i = 0; i < architecture_hash.length; i++) {
        if(this.formArchitecture.name == architecture_hash[i].name){
          app._data.alertMessaje = 'The component already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.newComponent.hide();
      var precision = false;
      if(this.formArchitecture.precision == "precision"){
        precision = true;
      }
      var newComp = {name: this.formArchitecture.name, type: this.formArchitecture.type, double_precision: precision ,elements:[]};
      architecture.components.push(newComp);
      var newComponentHash = {name: this.formArchitecture.name, index: architecture_hash.length};
      architecture_hash.push(newComponentHash);

      this.formArchitecture.name='';
      this.formArchitecture.type='';
      this.formArchitecture.precision='';
    
    },

    /*Muestra el modal para editar un componente*/
    editCompModal(comp, index, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditComponent.title = "Edit " + comp;
      this.modalEditComponent.element = comp;

      this.formArchitecture.name = comp;

      this.$root.$emit('bv::show::modal', 'modalEditComponent', button);
    },

    /*Comprueba que estan todos los campos del formulario de editar component*/
    editCompVerify(evt, comp){
      evt.preventDefault();
      if (!this.formArchitecture.name) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.editComponent(comp);
      }
    },

    /*Edita un componente*/
    editComponent(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        if((this.formArchitecture.name == architecture_hash[i].name) && (comp != this.formArchitecture.name)){
          app._data.alertMessaje = 'The component already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.editComponent.hide();
      for (var i = 0; i < architecture_hash.length; i++) {
        if(comp == architecture_hash[i].name){
          architecture_hash[i].name = this.formArchitecture.name;
          architecture.components[i].name = this.formArchitecture.name;
        }
      }
      this.formArchitecture.name='';
    },

    /*Muestra el modal de confirmacion de borrado de un componente*/
    delCompModal(elem, button){
      this.modalDeletComp.title = "Delete " + elem;
      this.modalDeletComp.element = elem;
      this.$root.$emit('bv::show::modal', 'modalDeletComp', button);
    },

    /*Borra un componente*/
    delComponent(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        if(comp == architecture_hash[i].name){
          architecture.components.splice(i,1);
          architecture_hash.splice(i,1);
          for (var j = 0; j < architecture_hash.length; j++){
            architecture_hash[j].index = j;
          }
        }
      }
    },

    /*Muestra el modal para nuevo un elemento*/
    newElemModal(comp, index, button){
      app._data.dismissCountDownMod = 0;

      this.modalNewElement.title = "New " + comp;
      this.modalNewElement.element = comp;
      this.modalNewElement.type = architecture.components[index].type;
      this.modalNewElement.double_precision = architecture.components[index].double_precision;

      this.$root.$emit('bv::show::modal', 'modalNewElement', button);

      app._data.simple_reg = [];
      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length && architecture.components[i].type =="floating point" && architecture.components[i].double_precision == false; j++){
          app._data.simple_reg.push({ text: architecture.components[i].elements[j].name, value: architecture.components[i].elements[j].name},)
        }
      }
    },

    /*Comprueba que estan todos los campos del formulario de nuevo elemento*/
    newElementVerify(evt, comp){
      evt.preventDefault();
      if (!this.formArchitecture.name) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        if(!this.formArchitecture.defValue && this.formArchitecture.double_precision == false){
          app._data.alertMessaje = 'Please complete all fields';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
        }
        else{
          this.newElement(comp);
        }
      }
    },

    /*Crea un nuevo elemento*/
    newElement(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length; j++){
          if(this.formArchitecture.name == architecture.components[i].elements[j].name){
            app._data.alertMessaje = 'The element already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        } 
      }

      this.$refs.newElement.hide();

      for (var i = 0; i < architecture_hash.length; i++) {
        if((comp == architecture_hash[i].name)&&(architecture.components[i].type == "integer")){
          var newElement = {name:this.formArchitecture.name, nbits: this.number_bits, value: bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value, default_value:bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value, properties: this.formArchitecture.properties};
          architecture.components[i].elements.push(newElement);
          this.formArchitecture.name='';
          this.formArchitecture.defValue='';
          this.formArchitecture.properties=[];
          break;
        }
        if((comp == architecture_hash[i].name)&&(architecture.components[i].type == "control")){
          var newElement = {name:this.formArchitecture.name, nbits: this.number_bits, value: bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value, default_value:bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value, properties: ["read", "write"]};
          architecture.components[i].elements.push(newElement);
          this.formArchitecture.name='';
          this.formArchitecture.defValue='';
          this.formArchitecture.properties=[];
          break;
        }
        if((comp == architecture_hash[i].name)&&(architecture.components[i].type == "floating point")&&(architecture.components[i].double_precision == false)){
          var newElement = {name:this.formArchitecture.name, nbits: this.number_bits, value: parseFloat(this.formArchitecture.defValue), default_value:parseFloat(this.formArchitecture.defValue), properties: this.formArchitecture.properties};
          architecture.components[i].elements.push(newElement);
          this.formArchitecture.name='';
          this.formArchitecture.defValue='';
          this.formArchitecture.properties=[];
          break;
        }
        if((comp == architecture_hash[i].name)&&(architecture.components[i].type == "floating point")&&(architecture.components[i].double_precision == true)){
          var aux_new;

          var aux_value;
          var aux_sim1;
          var aux_sim2;

          for (var a = 0; a < architecture_hash.length; a++) {
            for (var b = 0; b < architecture.components[a].elements.length; b++) {
              if(architecture.components[a].elements[b].name == this.formArchitecture.simple1){
                aux_sim1 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].default_value));
              }
              if(architecture.components[a].elements[b].name == this.formArchitecture.simple2){
                aux_sim2 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].default_value));
              }
            }
          }

          aux_value = aux_sim1 + aux_sim2;
          aux_new = this.hex2double("0x" + aux_value);

          var newElement = {name:this.formArchitecture.name, nbits: this.number_bits*2, value: aux_new, properties: this.formArchitecture.properties};
          architecture.components[i].elements.push(newElement);
          this.formArchitecture.name='';
          this.formArchitecture.defValue='';
          this.formArchitecture.properties=[];
          break;
        }
      }
    },
    
    /*Muestra el modal de editar un elemento*/
    editElemModal(elem, comp, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditElement.title = "Edit " + elem;
      this.modalEditElement.element = elem;
      this.modalEditElement.type = architecture.components[comp].type;
      this.modalEditElement.double_precision = architecture.components[comp].double_precision;

      app._data.simple_reg = [];
      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length && architecture.components[i].type =="floating point" && architecture.components[i].double_precision == false; j++){
          app._data.simple_reg.push({ text: architecture.components[i].elements[j].name, value: architecture.components[i].elements[j].name},)
        }
      }

      for(var j=0; j < architecture.components[comp].elements.length; j++){
        if(elem == architecture.components[comp].elements[j].name){
          this.formArchitecture.name = elem;
          this.formArchitecture.defValue = (architecture.components[comp].elements[j].default_value).toString();
          this.formArchitecture.properties = architecture.components[comp].elements[j].properties;
          if(this.modalEditElement.double_precision == true){
            this.formArchitecture.simple1 = architecture.components[comp].elements[j].simple_reg[0];
            this.formArchitecture.simple2 = architecture.components[comp].elements[j].simple_reg[1];
          }
        }
      }
      this.$root.$emit('bv::show::modal', 'modalEditElement', button);
    },

    /*Comprueba que estan todos los campos del formulario de editar elemento*/
    editElementVerify(evt, comp){
      evt.preventDefault();
      if (!this.formArchitecture.name || !this.formArchitecture.defValue) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.editElement(comp);
      }
    },

    /*Edita un elemento*/
    editElement(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length; j++){
          if((this.formArchitecture.name == architecture.components[i].elements[j].name) && (comp != this.formArchitecture.name)){
            app._data.alertMessaje = 'The element already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        } 
      }

      this.$refs.editElement.hide();
      for (var i = 0; i < architecture_hash.length; i++) {
        for(var j=0; j < architecture.components[i].elements.length; j++){
          if(comp == architecture.components[i].elements[j].name){
            architecture.components[i].elements[j].name = this.formArchitecture.name;
            if(architecture.components[i].type == "control" || architecture.components[i].type == "integer"){
              architecture.components[i].elements[j].default_value= bigInt(parseInt(this.formArchitecture.defValue) >>> 0, 10).value;
            }
            else{
              if(architecture.components[i].double_precision == false){
                architecture.components[i].elements[j].default_value= parseFloat(this.formArchitecture.defValue, 10);
              }
              else{
                
                var aux_value;
                var aux_sim1;
                var aux_sim2;

                for (var a = 0; a < architecture_hash.length; a++) {
                  for (var b = 0; b < architecture.components[a].elements.length; b++) {
                    if(architecture.components[a].elements[b].name == this.formArchitecture.simple1){
                      aux_sim1 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].value));
                    }
                    if(architecture.components[a].elements[b].name == this.formArchitecture.simple2){
                      aux_sim2 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].value));
                    }
                  }
                }

                aux_value = aux_sim1 + aux_sim2;

                architecture.components[i].elements[j].value = this.hex2double("0x" + aux_value);

                architecture.components[i].elements[j].simple_reg[0] = this.formArchitecture.simple1;
                architecture.components[i].elements[j].simple_reg[1] = this.formArchitecture.simple2;
              }
            }
            architecture.components[i].elements[j].properties = this.formArchitecture.properties;
          }
        }
      } 
      this.formArchitecture.name='';
      this.formArchitecture.defValue='';
      this.formArchitecture.properties=[];
      this.formArchitecture.simple1='';
      this.formArchitecture.simple2='';
    },

    /*Muestra el modal para confirmar el borrado*/
    delElemModal(elem, button){
      this.modalDeletElement.title = "Delete " + elem;
      this.modalDeletElement.element = elem;
      this.$root.$emit('bv::show::modal', 'modalDeletElement', button);
    },

    /*Borra un elemento*/
    delElement(comp){
      for (var i = 0; i < architecture_hash.length; i++) {
        for(var j=0; j < architecture.components[i].elements.length; j++){
          if(comp == architecture.components[i].elements[j].name){
            architecture.components[i].elements.splice(j,1);
          }
        }
      }
    },

    /*PAGINA DE INSTRUCCIONES*/
    /*Modal de alerta de reset*/
    resetInstModal(elem, button){
      this.modalResetInst.title = "Reset " + elem + " instructions";
      this.modalResetInst.element = elem;
      this.$root.$emit('bv::show::modal', 'modalResetInst', button);
    },

    resetInstructions(arch){
      $.getJSON('architecture/'+arch+'.json', function(cfg){
        architecture.instructions = cfg.instructions;
        app._data.architecture = architecture;

        app._data.alertMessaje = 'The instruction set has been reset correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
      });
    },

    /*Comprueba que estan todos los campos del formulario de nueva instruccion*/
    newInstVerify(evt){
      evt.preventDefault();

      var vacio = 0;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          if(!this.formInstruction.cop){
            vacio = 1;
          }
        }
      }

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        if(this.formInstruction.nameField.length <  this.formInstruction.numfields || this.formInstruction.typeField.length <  this.formInstruction.numfields || this.formInstruction.startBitField.length <  this.formInstruction.numfields || this.formInstruction.stopBitField.length <  this.formInstruction.numfields){
          vacio = 1;
        }
      }

      if (!this.formInstruction.name || !this.formInstruction.co || !this.formInstruction.nwords || !this.formInstruction.numfields || !this.formInstruction.definition || vacio == 1) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } 
      else if(isNaN(this.formInstruction.co)){
        app._data.alertMessaje = 'The field co must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.cop)){
        app._data.alertMessaje = 'The field cop must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else {
        this.newInstruction();
      }
    },

    /*Inserta una nueva instruccion*/
    newInstruction(){
      for (var i = 0; i < architecture.instructions.length; i++) {
        if(this.formInstruction.co == architecture.instructions[i].co){
          if((!this.formInstruction.cop)){
            app._data.alertMessaje = 'The instruction already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        }
      }

      for (var i = 0; i < architecture.instructions.length; i++) {
        if((this.formInstruction.cop == architecture.instructions[i].cop) && (!this.formInstruction.cop == false)){
          app._data.alertMessaje = 'The instruction already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.newInst.hide();

      var cop = false;

      var signature = this.formInstruction.name;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] != 'cop'){
          if(z == 1){
            signature = signature + ",";
          }
          signature = signature + this.formInstruction.typeField[z];
          if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
            signature = signature + ',';
          }
        }
        if(this.formInstruction.typeField[z] == 'cop'){
          cop = true;
          if(z<this.formInstruction.numfields-1){
            signature = signature + ',';
          }
        }
      }

      var signatureRaw = this.formInstruction.name;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] != 'cop'){
          if(z == 1){
            signatureRaw = signatureRaw + ' ';
          }
          if(this.formInstruction.typeField[z] == '(reg)'){
            signatureRaw = signatureRaw + '(' +this.formInstruction.nameField[z] + ')';
            if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
              signatureRaw = signatureRaw + ' ';
            } 
          }
          else{
            signatureRaw = signatureRaw + this.formInstruction.nameField[z];
            if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
              signatureRaw = signatureRaw + ' ';
            } 
          }
        }
        if(this.formInstruction.typeField[z] == 'cop'){
          if(z<this.formInstruction.numfields-1){
            signatureRaw = signatureRaw + ' ';
          }
        }
      }

      if(cop == false){
        this.formInstruction.cop='';
      }

      var newInstruction = {name: this.formInstruction.name, signature: signature, signatureRaw: signatureRaw, co: this.formInstruction.co , cop: this.formInstruction.cop, nwords: this.formInstruction.nwords , fields: [], definition: this.formInstruction.definition};
      architecture.instructions.push(newInstruction);

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        var newField = {name: this.formInstruction.nameField[i], type: this.formInstruction.typeField[i], startbit: this.formInstruction.startBitField[i], stopbit: this.formInstruction.stopBitField[i]};
        architecture.instructions[architecture.instructions.length-1].fields.push(newField);
      }

      this.formInstruction.name='';
      this.formInstruction.cop='';
      this.formInstruction.co ='';
      this.formInstruction.nwords =1;
      this.formInstruction.numfields=1;
      this.formInstruction.nameField=[];
      this.formInstruction.typeField=[];
      this.formInstruction.startBitField=[];
      this.formInstruction.stopBitField=[];
      this.formInstruction.definition='';
      this.formInstruction.assignedCop=false;
      this.instructionFormPage = 1;
      
    },

    /*Muestra el modal de confirmacion de borrado de una instruccion*/
    delInstModal(elem, button){
      this.modalDeletInst.title = "Delete " + elem;
      this.modalDeletInst.element = elem;
      this.$root.$emit('bv::show::modal', 'modalDeletInst', button);
    },

    /*Borra una instruccion*/
    delInstruction(comp){
      for (var i = 0; i < architecture.instructions.length; i++) {
        if(comp == architecture.instructions[i].name){
          architecture.instructions.splice(i,1);
        }
      }
    },

    /*Muestra el modal de editar instruccion*/
    editInstModal(elem, co, cop, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditInst.title = "Edit " + elem;
      this.modalEditInst.element = elem;
      for (var i = 0; i < architecture.instructions.length; i++) {
        if(elem == architecture.instructions[i].name && co == architecture.instructions[i].co && cop == architecture.instructions[i].cop){
          this.formInstruction.name = architecture.instructions[i].name;
          this.formInstruction.cop = architecture.instructions[i].cop;
          this.formInstruction.co = architecture.instructions[i].co;
          app._data.modalEditInst.co = architecture.instructions[i].co;
          app._data.modalEditInst.cop = architecture.instructions[i].cop;
          this.formInstruction.nwords = architecture.instructions[i].nwords;
          this.formInstruction.numfields = architecture.instructions[i].fields.length;
          this.formInstruction.definition = architecture.instructions[i].definition;

          for (var j = 0; j < architecture.instructions[i].fields.length; j++) {
            this.formInstruction.nameField [j]= architecture.instructions[i].fields[j].name;
            this.formInstruction.typeField[j] = architecture.instructions[i].fields[j].type;
            this.formInstruction.startBitField[j] = architecture.instructions[i].fields[j].startbit;
            this.formInstruction.stopBitField[j] = architecture.instructions[i].fields[j].stopbit;
          }

        }
      }

      this.$root.$emit('bv::show::modal', 'modalEditInst', button);
    },

    /*Comprueba que estan todos los campos del formulario de editar instruccion*/
    editInstVerify(evt, inst, co, cop){
      evt.preventDefault();

      var vacio = 0;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          if(!this.formInstruction.cop){
            vacio = 1;
          }
        }
      }

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        if(!this.formInstruction.nameField[i] || !this.formInstruction.typeField[i] || (!this.formInstruction.startBitField[i] && this.formInstruction.startBitField[i] != 0) || (!this.formInstruction.stopBitField[i] && this.formInstruction.stopBitField[i] != 0)){
          vacio = 1;
        }
      }
      if (!this.formInstruction.name || !this.formInstruction.co || !this.formInstruction.nwords || !this.formInstruction.numfields || !this.formInstruction.definition || vacio == 1) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.co)){
        app._data.alertMessaje = 'The field co must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.cop)){
        app._data.alertMessaje = 'The field cop must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else {
        this.editInstruction(inst, co, cop);
      }
    },

    /*edita una instruccion*/
    editInstruction(comp, co, cop){
      var exCop = false;

      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          exCop = true;
        }
      }

      for (var i = 0; i < architecture.instructions.length; i++) {
        if((this.formInstruction.co == architecture.instructions[i].co) && (this.formInstruction.co != co) && (exCop == false)){
          if(((!this.formInstruction.cop) || (exCop != true))){
            app._data.alertMessaje = 'The instruction already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        }
      }

      for (var i = 0; i < architecture.instructions.length && exCop == true ; i++) {
        if((this.formInstruction.cop == architecture.instructions[i].cop) && (!this.formInstruction.cop == false) && (this.formInstruction.cop != cop)){
          app._data.alertMessaje = 'The instruction already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.editInst.hide();
      for (var i = 0; i < architecture.instructions.length; i++){
        if(architecture.instructions[i].name == comp && architecture.instructions[i].co == co && architecture.instructions[i].cop == cop){
          architecture.instructions[i].name = this.formInstruction.name;
          architecture.instructions[i].co = this.formInstruction.co;
          architecture.instructions[i].cop = this.formInstruction.cop;
          architecture.instructions[i].nwords = this.formInstruction.nwords;
          architecture.instructions[i].definition = this.formInstruction.definition;

          for (var j = 0; j < this.formInstruction.numfields; j++){
            if(j < architecture.instructions[i].fields.length){
              architecture.instructions[i].fields[j].name = this.formInstruction.nameField[j];
              architecture.instructions[i].fields[j].type = this.formInstruction.typeField[j];
              architecture.instructions[i].fields[j].startbit = this.formInstruction.startBitField[j];
              architecture.instructions[i].fields[j].stopbit = this.formInstruction.stopBitField[j];
            }
            else{
              var newField = {name: this.formInstruction.nameField[j], type: this.formInstruction.typeField[j], startbit: this.formInstruction.startBitField[j], stopbit: this.formInstruction.stopBitField[j]};
              architecture.instructions[i].fields.push(newField);
            }
          }

          var signature = this.formInstruction.name;
          for (var z = 1; z < this.formInstruction.numfields; z++) {
            if(z == 1){
              signature = signature + ",";
            }
            if(this.formInstruction.typeField[z] != 'cop'){
              signature = signature + this.formInstruction.typeField[z];
              if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
                signature = signature + ',';
              }
            }
            if(this.formInstruction.typeField[z] == 'cop'){
              cop = true;
              if(z<this.formInstruction.numfields-1){
                signature = signature + ',';
              }
            }
          }

          var signatureRaw = this.formInstruction.name;
          for (var z = 1; z < this.formInstruction.numfields; z++) {
            if(this.formInstruction.typeField[z] != 'cop'){
              if(z == 1){
                signatureRaw = signatureRaw + ' ';
              }
              if(this.formInstruction.typeField[z] == '(reg)'){
                signatureRaw = signatureRaw + '(' +this.formInstruction.nameField[z] + ')';
                if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
                  signatureRaw = signatureRaw + ' ';
                } 
              }
              else{
                signatureRaw = signatureRaw + this.formInstruction.nameField[z];
                if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
                  signatureRaw = signatureRaw + ' ';
                } 
              }
            }
            if(this.formInstruction.typeField[z] == 'cop'){
              if(z<this.formInstruction.numfields-1){
                signatureRaw = signatureRaw + ' ';
              }
            }
          }

          if(exCop == false){
            architecture.instructions[i].cop='';
          }

          architecture.instructions[i].signature = signature;
          architecture.instructions[i].signatureRaw = signatureRaw;

          if(architecture.instructions[i].fields.length > this.formInstruction.numfields){
            architecture.instructions[i].fields.splice(this.formInstruction.numfields, (architecture.instructions[i].fields.length - this.formInstruction.numfields));
          }

        }
      }

      this.formInstruction.name='';
      this.formInstruction.cop='';
      this.formInstruction.co ='';
      this.formInstruction.nwords =1;
      this.formInstruction.numfields=1;
      this.formInstruction.nameField=[];
      this.formInstruction.typeField=[];
      this.formInstruction.startBitField=[];
      this.formInstruction.stopBitField=[];
      this.formInstruction.definition='';
      this.instructionFormPage = 1;
    },

    /*PAGINA DE PSEUDOINSTRUCCIONES*/
    /*Modal de alerta de reset*/
    resetPseudoinstModal(elem, button){
      this.modalResetPseudoinst.title = "Reset " + elem + " pseudoinstructions";
      this.modalResetPseudoinst.element = elem;
      this.$root.$emit('bv::show::modal', 'modalResetPseudoinst', button);
    },

    resetPseudoinstructionsModal(arch){
      $.getJSON('architecture/'+arch+'.json', function(cfg){
        architecture.pseudoinstructions = cfg.pseudoinstructions;
        app._data.architecture = architecture;

        app._data.alertMessaje = 'The pseudoinstruction set has been reset correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
      });
    },

    /*Muestra el modal de confirmacion de borrado de una instruccion*/
    delPseudoinstModal(elem, button){
      this.modalDeletPseudoinst.title = "Delete " + elem;
      this.modalDeletPseudoinst.element = elem;
      this.$root.$emit('bv::show::modal', 'modalDeletPseudoinst', button);
    },

    /*Borra una instruccion*/
    delPseudoinstruction(comp){
      for (var i = 0; i < architecture.pseudoinstructions.length; i++) {
        if(comp == architecture.pseudoinstructions[i].name){
          architecture.pseudoinstructions.splice(i,1);
        }
      }
    },

    /*Muestra el modal de editar instruccion*/
    editPseudoinstModal(elem, co, cop, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditPseudoinst.title = "Edit " + elem;
      this.modalEditPseudoinst.element = elem;
      for (var i = 0; i < architecture.pseudoinstructions.length; i++) {
        if(elem == architecture.pseudoinstructions[i].name && co == architecture.pseudoinstructions[i].co && cop == architecture.pseudoinstructions[i].cop){
          this.formInstruction.name = architecture.pseudoinstructions[i].name;
          this.formInstruction.cop = architecture.pseudoinstructions[i].cop;
          this.formInstruction.co = architecture.pseudoinstructions[i].co;
          app._data.modalEditPseudoinst.co = architecture.pseudoinstructions[i].co;
          app._data.modalEditPseudoinst.cop = architecture.pseudoinstructions[i].cop;
          this.formInstruction.nwords = architecture.pseudoinstructions[i].nwords;
          this.formInstruction.numfields = architecture.pseudoinstructions[i].fields.length;
          this.formInstruction.definition = architecture.pseudoinstructions[i].definition;

          for (var j = 0; j < architecture.pseudoinstructions[i].fields.length; j++) {
            this.formInstruction.nameField [j]= architecture.pseudoinstructions[i].fields[j].name;
            this.formInstruction.typeField[j] = architecture.pseudoinstructions[i].fields[j].type;
            this.formInstruction.startBitField[j] = architecture.pseudoinstructions[i].fields[j].startbit;
            this.formInstruction.stopBitField[j] = architecture.pseudoinstructions[i].fields[j].stopbit;
          }
        }
      }

      this.$root.$emit('bv::show::modal', 'modalEditPseudoinst', button);
    },

    /*Comprueba que estan todos los campos del formulario de editar instruccion*/
    editPseudoinstVerify(evt, inst, co, cop){
      evt.preventDefault();

      var vacio = 0;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          if(!this.formInstruction.cop){
            vacio = 1;
          }
        }
      }

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        if(!this.formInstruction.nameField[i] || !this.formInstruction.typeField[i] || (!this.formInstruction.startBitField[i] && this.formInstruction.startBitField[i] != 0) || (!this.formInstruction.stopBitField[i] && this.formInstruction.stopBitField[i] != 0)){
          vacio = 1;
        }
      }
      if (!this.formInstruction.name || !this.formInstruction.co || !this.formInstruction.nwords || !this.formInstruction.numfields || !this.formInstruction.definition || vacio == 1) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.co)){
        app._data.alertMessaje = 'The field co must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.cop)){
        app._data.alertMessaje = 'The field cop must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else {
        this.editPseudoinstruction(inst, co, cop);
      }
    },

    /*edita una instruccion*/
    editPseudoinstruction(comp, co, cop){
      var exCop = false;

      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          exCop = true;
        }
      }

      for (var i = 0; i < architecture.pseudoinstructions.length; i++) {
        if((this.formInstruction.co == architecture.pseudoinstructions[i].co) && (this.formInstruction.co != co) && (exCop == false)){
          if(((!this.formInstruction.cop) || (exCop != true))){
            app._data.alertMessaje = 'The instruction already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        }
      }

      for (var i = 0; i < architecture.pseudoinstructions.length && exCop == true ; i++) {
        if((this.formInstruction.cop == architecture.pseudoinstructions[i].cop) && (!this.formInstruction.cop == false) && (this.formInstruction.cop != cop)){
          app._data.alertMessaje = 'The instruction already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.editPseudoinst.hide();
      for (var i = 0; i < architecture.pseudoinstructions.length; i++){
        if(architecture.pseudoinstructions[i].name == comp && architecture.pseudoinstructions[i].co == co && architecture.pseudoinstructions[i].cop == cop){
          architecture.pseudoinstructions[i].name = this.formInstruction.name;
          architecture.pseudoinstructions[i].co = this.formInstruction.co;
          architecture.pseudoinstructions[i].cop = this.formInstruction.cop;
          architecture.pseudoinstructions[i].nwords = this.formInstruction.nwords;
          architecture.pseudoinstructions[i].definition = this.formInstruction.definition;

          for (var j = 0; j < this.formInstruction.numfields; j++){
            if(j < architecture.pseudoinstructions[i].fields.length){
              architecture.pseudoinstructions[i].fields[j].name = this.formInstruction.nameField[j];
              architecture.pseudoinstructions[i].fields[j].type = this.formInstruction.typeField[j];
              architecture.pseudoinstructions[i].fields[j].startbit = this.formInstruction.startBitField[j];
              architecture.pseudoinstructions[i].fields[j].stopbit = this.formInstruction.stopBitField[j];
            }
            else{
              var newField = {name: this.formInstruction.nameField[j], type: this.formInstruction.typeField[j], startbit: this.formInstruction.startBitField[j], stopbit: this.formInstruction.stopBitField[j]};
              architecture.pseudoinstructions[i].fields.push(newField);
            }
          }

          var signature = this.formInstruction.name;
          for (var z = 1; z < this.formInstruction.numfields; z++) {
            if(z == 1){
              signature = signature + ",";
            }
            if(this.formInstruction.typeField[z] != 'cop'){
              signature = signature + this.formInstruction.typeField[z];
              if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
                signature = signature + ',';
              }
            }
            if(this.formInstruction.typeField[z] == 'cop'){
              cop = true;
              if(z<this.formInstruction.numfields-1){
                signature = signature + ',';
              }
            }
          }

          var signatureRaw = this.formInstruction.name;
          for (var z = 1; z < this.formInstruction.numfields; z++) {
            if(this.formInstruction.typeField[z] != 'cop'){
              if(z == 1){
                signatureRaw = signatureRaw + ' ';
              }
              if(this.formInstruction.typeField[z] == '(reg)'){
                signatureRaw = signatureRaw + '(' +this.formInstruction.nameField[z] + ')';
                if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
                  signatureRaw = signatureRaw + ' ';
                } 
              }
              else{
                signatureRaw = signatureRaw + this.formInstruction.nameField[z];
                if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
                  signatureRaw = signatureRaw + ' ';
                } 
              }
            }
            if(this.formInstruction.typeField[z] == 'cop'){
              if(z<this.formInstruction.numfields-1){
                signatureRaw = signatureRaw + ' ';
              }
            }
          }

          if(exCop == false){
            architecture.pseudoinstructions[i].cop='';
          }

          architecture.pseudoinstructions[i].signature = signature;
          architecture.pseudoinstructions[i].signatureRaw = signatureRaw;

          if(architecture.pseudoinstructions[i].fields.length > this.formInstruction.numfields){
            architecture.pseudoinstructions[i].fields.splice(this.formInstruction.numfields, (architecture.pseudoinstructions[i].fields.length - this.formInstruction.numfields));
          }

        }
      }

      this.formInstruction.name='';
      this.formInstruction.cop='';
      this.formInstruction.co ='';
      this.formInstruction.nwords =1;
      this.formInstruction.numfields=1;
      this.formInstruction.nameField=[];
      this.formInstruction.typeField=[];
      this.formInstruction.startBitField=[];
      this.formInstruction.stopBitField=[];
      this.formInstruction.definition='';
      this.instructionFormPage = 1;
    },

    /*Comprueba que estan todos los campos del formulario de nueva pseudoinstruccion*/
    newPseudoinstVerify(evt){
      evt.preventDefault();

      var vacio = 0;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] == 'cop'){
          if(!this.formInstruction.cop){
            vacio = 1;
          }
        }
      }

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        if(this.formInstruction.nameField.length <  this.formInstruction.numfields || this.formInstruction.typeField.length <  this.formInstruction.numfields || this.formInstruction.startBitField.length <  this.formInstruction.numfields || this.formInstruction.stopBitField.length <  this.formInstruction.numfields){
          vacio = 1;
        }
      }

      if (!this.formInstruction.name || !this.formInstruction.co || !this.formInstruction.nwords || !this.formInstruction.numfields || !this.formInstruction.definition || vacio == 1) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } 
      else if(isNaN(this.formInstruction.co)){
        app._data.alertMessaje = 'The field co must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else if(isNaN(this.formInstruction.cop)){
        app._data.alertMessaje = 'The field cop must be numbers';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      }
      else {
        this.newPseudoinstruction();
      }
    },

    /*Inserta una nueva pseudoinstruccion*/
    newPseudoinstruction(){
      for (var i = 0; i < architecture.pseudoinstructions.length; i++) {
        if(this.formInstruction.co == architecture.pseudoinstructions[i].co){
          if((!this.formInstruction.cop)){
            app._data.alertMessaje = 'The instruction already exists';
            app._data.type ='danger';
            app._data.dismissCountDownMod = app._data.dismissSecsMod;
            return;
          }
        }
      }

      for (var i = 0; i < architecture.pseudoinstructions.length; i++) {
        if((this.formInstruction.cop == architecture.pseudoinstructions[i].cop) && (!this.formInstruction.cop == false)){
          app._data.alertMessaje = 'The instruction already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.newInst.hide();

      var cop = false;

      var signature = this.formInstruction.name;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] != 'cop'){
          if(z == 1){
            signature = signature + ",";
          }
          signature = signature + this.formInstruction.typeField[z];
          if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
            signature = signature + ',';
          }
        }
        if(this.formInstruction.typeField[z] == 'cop'){
          cop = true;
          if(z<this.formInstruction.numfields-1){
            signature = signature + ',';
          }
        }
      }

      var signatureRaw = this.formInstruction.name;
      for (var z = 1; z < this.formInstruction.numfields; z++) {
        if(this.formInstruction.typeField[z] != 'cop'){
          if(z == 1){
            signatureRaw = signatureRaw + ' ';
          }
          if(this.formInstruction.typeField[z] == '(reg)'){
            signatureRaw = signatureRaw + '(' +this.formInstruction.nameField[z] + ')';
            if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
              signatureRaw = signatureRaw + ' ';
            } 
          }
          else{
            signatureRaw = signatureRaw + this.formInstruction.nameField[z];
            if((z<this.formInstruction.numfields-1) && (this.formInstruction.typeField[z+1] != 'cop')){
              signatureRaw = signatureRaw + ' ';
            } 
          }
        }
        if(this.formInstruction.typeField[z] == 'cop'){
          if(z<this.formInstruction.numfields-1){
            signatureRaw = signatureRaw + ' ';
          }
        }
      }

      if(cop == false){
        this.formInstruction.cop='';
      }

      var newPseudoinstruction = {name: this.formInstruction.name, signature: signature, signatureRaw: signatureRaw, co: this.formInstruction.co , cop: this.formInstruction.cop, nwords: this.formInstruction.nwords , fields: [], definition: this.formInstruction.definition};
      architecture.pseudoinstructions.push(newPseudoinstruction);

      for (var i = 0; i < this.formInstruction.numfields; i++) {
        var newField = {name: this.formInstruction.nameField[i], type: this.formInstruction.typeField[i], startbit: this.formInstruction.startBitField[i], stopbit: this.formInstruction.stopBitField[i]};
        architecture.pseudoinstructions[architecture.pseudoinstructions.length-1].fields.push(newField);
      }

      this.formInstruction.name='';
      this.formInstruction.cop='';
      this.formInstruction.co ='';
      this.formInstruction.nwords =1;
      this.formInstruction.numfields=1;
      this.formInstruction.nameField=[];
      this.formInstruction.typeField=[];
      this.formInstruction.startBitField=[];
      this.formInstruction.stopBitField=[];
      this.formInstruction.definition='';
      this.formInstruction.assignedCop=false;
      this.instructionFormPage = 1;
      
    },


    /*PAGINA DE DIRECTIVAS*/
    /*Modal de alerta de reset*/
    resetDirModal(elem, button){
      this.modalResetDir.title = "Reset " + elem + " directives";
      this.modalResetDir.element = elem;
      this.$root.$emit('bv::show::modal', 'modalResetDir', button);
    },

    resetDirectives(arch){
      $.getJSON('architecture/'+arch+'.json', function(cfg){
        architecture.directives = cfg.directives;
        app._data.architecture = architecture;

        app._data.alertMessaje = 'The directive set has been reset correctly';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
      });
    },

    /*Muestra el modal de confirmacion de borrado de una directiva*/
    delDirModal(elem, button){
      this.modalDeletDir.title = "Delete " + elem;
      this.modalDeletDir.element = elem;
      this.$root.$emit('bv::show::modal', 'modalDeletDir', button);
    },

    /*Borra una instruccion*/
    delDirective(comp){
      for (var i = 0; i < architecture.directives.length; i++) {
        if(comp == architecture.directives[i].name){
          architecture.directives.splice(i,1);
        }
      }
    },

    /*Muestra el modal de editar directiva*/
    editDirModal(elem, button){
      app._data.dismissCountDownMod = 0;

      this.modalEditDirective.title = "Edit " + elem;
      this.modalEditDirective.element = elem;

      for (var i = 0; i < architecture.directives.length; i++) {
        if(elem == architecture.directives[i].name){
          this.formDirective.name = architecture.directives[i].name;
          this.formDirective.kindof = architecture.directives[i].kindof;
          this.formDirective.size = architecture.directives[i].size;
        }
      }
      
      this.$root.$emit('bv::show::modal', 'modalEditDirective', button);
    },

    /*Verifica que se han completado todos los campos*/
    editDirVerify(evt, name){
      evt.preventDefault();

      if (!this.formDirective.name || !this.formDirective.kindof || isNaN(parseInt(this.formDirective.size))) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.editDirective(name);
      }
    },

    /*Edita la directiva*/
    editDirective(name){
      for (var i = 0; i < architecture.directives.length; i++) {
        if((this.formDirective.name == architecture.directives[i].name) && (name != this.formDirective.name)){
          app._data.alertMessaje = 'The directive already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.editDirective.hide();

      for (var i = 0; i < architecture.directives.length; i++) {
        if(name == architecture.directives[i].name){
          architecture.directives[i].name = this.formDirective.name;
          architecture.directives[i].kindof = this.formDirective.kindof;
          architecture.directives[i].size = this.formDirective.size;

          this.formDirective.name = '';
          this.formDirective.kindof = '';
          this.formDirective.size = 0;

          return;
        }
      }
    },

    /*Verifica que se han completado todos los campos*/
    newDirVerify(evt){

      evt.preventDefault();

      if (!this.formDirective.name || !this.formDirective.kindof || isNaN(parseInt(this.formDirective.size))) {
        app._data.alertMessaje = 'Please complete all fields';
        app._data.type ='danger';
        app._data.dismissCountDownMod = app._data.dismissSecsMod;
      } else {
        this.newDirective();
      }
    },

    /*Crea una nueva directiva*/
    newDirective(){
      for (var i = 0; i < architecture.directives.length; i++) {
        if(this.formDirective.name == architecture.directives[i].name){
          app._data.alertMessaje = 'The directive already exists';
          app._data.type ='danger';
          app._data.dismissCountDownMod = app._data.dismissSecsMod;
          return;
        }
      }

      this.$refs.newDir.hide();

      var newDir = {name: this.formDirective.name, kindof: this.formDirective.kindof, size: this.formDirective.size};
      architecture.directives.push(newDir);

      this.formDirective.name='';
      this.formDirective.kindof='';
      this.formDirective.size=0;
    },
    












    /*PAGINA ENSAMBLADOR*/
    /*Funciones de carga y descarga de ensamblador*/
    read_assembly(e){
      var file;
      var reader;
      var files = document.getElementById('assembly_file').files;

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        reader = new FileReader();
        reader.onloadend = onFileLoaded;
        reader.readAsBinaryString(file);
      }

      function onFileLoaded(event) {
        code_assembly = event.currentTarget.result;
      }
    },

    assembly_update(){
      textarea_assembly_editor.setValue(code_assembly);
    },

    assembly_save(){
      var textToWrite = textarea_assembly_editor.getValue();
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
      var fileNameToSaveAs;

      if(this.save_assembly == ''){
        fileNameToSaveAs = "assembly.txt";
      }
      else{
        fileNameToSaveAs = this.save_assembly + ".txt";
      }

      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "My Hidden Link";

      window.URL = window.URL || window.webkitURL;

      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
    },

    /*Lee un token*/
    get_token(){
      var assembly = textarea_assembly_editor.getValue();
      var index = tokenIndex;

      if(index == assembly.length){
        return null;
      }

      while((assembly.charAt(index) != '#') && (assembly.charAt(index) != '\t') && (assembly.charAt(index) != '\n') && (assembly.charAt(index) != ' ') && (assembly.charAt(index) != '\r') && (index < assembly.length)){
        index++;
      }

      return assembly.substring(tokenIndex, index);
    },

    /*Avanza al siguente token*/
    next_token(){

      console.log("next")

      var assembly = textarea_assembly_editor.getValue();
      var index = tokenIndex;

      while((assembly.charAt(index) != '#') && (assembly.charAt(index) != '\t') && (assembly.charAt(index) != '\n') && (assembly.charAt(index) != ' ') && (assembly.charAt(index) != '\r') && (index < assembly.length)){
        index++;
      }

      while(((assembly.charAt(index) == '\t') || (assembly.charAt(index) == '\n') || (assembly.charAt(index) == ' ') || (assembly.charAt(index) == '\r')) && (index < assembly.length)){
        index++;
      }

      if(assembly.charAt(index) == '#'){
        while((assembly.charAt(index) != '\n') && (index < assembly.length)){
          index++;
        }

        while(((assembly.charAt(index) == '\t') || (assembly.charAt(index) == '\n') || (assembly.charAt(index) == ' ') || (assembly.charAt(index) == '\r')) && (index < assembly.length)){
          index++;
        }
        
      }
      tokenIndex = index;

      console.log(tokenIndex)
    },

    /*Coloca el puntero en la primera posicion*/
    first_token(){
      var assembly = textarea_assembly_editor.getValue();
      var index = tokenIndex;

      while(((assembly.charAt(index) == '\t') || (assembly.charAt(index) == '\n') || (assembly.charAt(index) == ' ') || (assembly.charAt(index) == '\r')) && (index < assembly.length)){
        index++;
      }
      tokenIndex = index;
    },

    /*Compilador*/
    assembly_compiler(){
      instructions = [];
      pending_instructions = [];

      var existsInstruction = true;
      var address = 0x0000;

      this.first_token();

      if(this.get_token() == null){
        app._data.alertMessaje = 'Please enter the assembly code before compiling';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        return;
      }

      while(existsInstruction){
        var token = this.get_token();
        var label = "";
        var validTagPC = true;

        if(token == null){
          app._data.alertMessaje = 'Compilation completed successfully';
          app._data.type ='success';
          app._data.dismissCountDown = app._data.dismissSecs;
          tokenIndex = 0;
          break;
        }

        console.log(token)

        var found = false;

        if(token.search(/\:$/) != -1){
          if(token.length == 1){
            alert("Empty label");
            break;
          }

          label = token.substring(0,token.length-1);
          this.next_token();
          token = this.get_token();
        }

        for(var i = 0; i < architecture.instructions.length; i++){
          if(architecture.instructions[i].name != token){
            continue;
          }
          else{
            var error = false;

            var binary = "";
            binary = binary.padStart(architecture.instructions[i].nwords * 32, "0");

            var instruction ="";

            signatureParts = architecture.instructions[i].signature.split(',');
            signatureRawParts = architecture.instructions[i].signatureRaw.split(' ');


            for(var j = 0; j < signatureParts.length; j++){
              switch(signatureParts[j]) {
                case "reg":
                  token = this.get_token();

                  console.log(token)

                  var validReg = false;

                  if(token.charAt(0)!= '$'){
                    break;
                  }

                  var auxToken = token.substring(1,token.length);

                  console.log("token " + auxToken)

                  for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                    if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                      for(var z = 0; z < architecture_hash.length; z++){
                        for(var w = 0; w < architecture.components[z].elements.length; w++){
                          if(auxToken == architecture.components[z].elements[w].name){
                            validReg = true;

                            fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                            var reg = w;

                            binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (reg.toString(2)).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                            instruction = instruction + " " + token;

                            console.log((reg.toString(2)).padStart(fieldsLength, "0"))
                            console.log(binary)
                            console.log(instruction)

                          }
                          else if(z == architecture_hash.length-1 && w == architecture.components[z].elements.length-1 && validReg == false){
                            /*app._data.alertMessaje = 'Register "'+ token +'" not found';
                            app._data.type ='danger';
                            app._data.dismissCountDown = app._data.dismissSecs;*/

                            alert('Register "'+ token +'" not found');

                            error = true;
                          }
                        }
                      }
                    }
                  }

                  this.next_token();

                  break;
                case "inm":
                  token = this.get_token();

                  console.log(token)

                  for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                    if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                      fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                  
                      var inm;

                      if(token.match(/^0x/)){
                        console.log("a")
                        var value = token.split("x");

                        if(value[1].length*4 > fieldsLength){
                          alert('Immediate number "'+ token +'" is too big')

                          error = true
                          break;
                        }

                        if(isNaN(parseInt(token, 16)) == true){
                          alert('Immediate number "'+ token +'" is not valid')
                        
                          error = true
                          break;
                        }

                        inm = (parseInt(token, 16)).toString(2);
                      }
                      else if (token.match(/^(\d)+\.(\d)+/)){
                        console.log("b")
                        if(this.float2bin(parseFloat(token)).length > fieldsLength){
                          alert('Immediate number "'+ token +'" is too big')

                          error = true
                          break;
                        }

                        if(isNaN(parseFloat(token)) == true){
                          alert('Immediate number "'+ token +'" is not valid')
                        
                          error = true
                          break;
                        }

                        inm = this.float2bin(parseFloat(token, 16));
                      }
                      else if(isNaN(parseInt(token))){
                        if(instructions.length == 0){
                          validTagPC = false;
                        }

                        for (var z = 0; z < instructions.length; z++){
                          if(token == instructions[z].Label){
                            var addr = (parseInt(instructions[z].Address, 16)).toString(2);

                            binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                            token = instructions[z].Address;

                            validTagPC = true;
                            break;
                          }
                          else if(z == instructions.length-1){
                            validTagPC = false;
                          }  
                        }
                      }
                      else {
                        console.log("c")
                        var numAux = parseInt(token, 10);
                        if((numAux.toString(2)).length > fieldsLength){
                          alert('Immediate number "'+ token +'" is too big')

                          error = true
                          break;
                        }

                        if(isNaN(parseInt(token)) == true){
                          alert('Immediate number "'+ token +'" is not valid')
                        
                          error = true
                          break;
                        }

                        inm = (parseInt(token, 10)).toString(2);
                      }
                      if(validTagPC == true){
                        binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + inm.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                        console.log(inm.padStart(fieldsLength, "0"))
                      }
                      
                      instruction = instruction + " " + token;
                      console.log(instruction)
                      
                    }
                  }

                  this.next_token();

                  break;

                case "address":
                  token = this.get_token();

                  console.log(token)

                  for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                    if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                      fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;

                      if(token.match(/^0x/)){
                        var value = token.split("x");

                        if(value[1].length*4 > fieldsLength){
                          alert('Address "'+ token +'" is too big')

                          error = true
                          break;
                        }

                        if(isNaN(parseInt(token, 16)) == true){
                          alert('Address "'+ token +'" is not valid')
                        
                          error = true
                          break;
                        }

                        addr = (parseInt(token, 16)).toString(2);
                      
                        binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                        instruction = instruction + " " + token;

                        console.log(instruction)
                      }
                      else{
                        var validTag = false;
                        for (var z = 0; z < memory.length; z++){
                          for (var w = 0; w < memory[z].Binary.length; w++){
                            if(token == memory[z].Binary[w].Tag){
                              addr = (memory[z].Binary[w].Addr).toString(2);

                              binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                              instruction = instruction + " " + token;

                              validTag = true;
                            }
                            if(z == memory.length-1 && w == memory[z].Binary.length-1 && validTag == false){
                              alert('Tag "'+ token +'" is not valid')
                        
                              error = true
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                  
                  this.next_token();

                  break;

                case "(reg)":
                  token = this.get_token();

                  for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                    if("(" + architecture.instructions[i].fields[a].name + ")" == signatureRawParts[j]){
                      fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;

                      console.log("signatureRawParts[j]")

                      if(token.charAt(0) != '('){
                        alert('This field"'+ token +'" must start with a "("')
                        
                        error = true
                        break;
                      }

                      if(token.charAt(token.length-1) != ')'){
                        alert('This field"'+ token +'" must end with a ")"')
                        
                        error = true
                        break;
                      }
                      
                      re = /\((.*?)\)/;
                      if (token.search(re) != -1){
                        var match = re.exec(token);

                        var auxToken = match[0].substring(1,match[0].length-1);

                        validReg = false;

                        for(var z = 0; z < architecture_hash.length; z++){
                          for(var w = 0; w < architecture.components[z].elements.length; w++){
                            if(auxToken == "$" + architecture.components[z].elements[w].name){
                              validReg = true;
                              fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                              var reg = w;

                              binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (reg.toString(2)).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                              instruction = instruction + " " + token;

                              console.log((reg.toString(2)).padStart(fieldsLength, "0"))
                              console.log(binary)
                              console.log(instruction)
                            }
                            else if(z == architecture_hash.length-1 && w == architecture.components[z].elements.length-1 && validReg == false){
                              alert('Register "'+ match[0] +'" not found');

                              error = true;
                            }
                          }
                        }
                      }
                    }
                  }

                  this.next_token();

                  break;

                default:
                  token = this.get_token();

                  console.log(token)

                  for(var a = 0; a < architecture.instructions[i].fields.length; a++){

                    console.log(signatureRawParts[j])

                    if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                      fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                      
                      binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (architecture.instructions[i].co).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit), binary.length);

                      instruction = instruction + token;

                      console.log((architecture.instructions[i].co).padStart(fieldsLength, "0"))
                      console.log(binary)
                      console.log(instruction)
                    }

                    if(architecture.instructions[i].fields[a].type == "cop"){
                      fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;

                      binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (architecture.instructions[i].cop).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);

                      console.log((architecture.instructions[i].cop).padStart(fieldsLength, "0"))
                      console.log(binary)
                    }
                  }

                  console.log("antes token")

                  this.next_token();
                break;
              }


            }

            if(error == false){
              if(validTagPC == false){
                console.log("pendiente")
                pending_instructions.push({address: address, instruction: instruction, signature: signatureParts, signatureRaw: signatureRawParts, instIndex: i});

                address = address + (4*architecture.instructions[i].nwords);
                
                found = true;

                break;
              }
              else{
                console.log("no pendiente")

                var padding = "";
                padding = padding.padStart((architecture.instructions[i].nwords*32)-(binary.length), "0");

                binary = binary + padding;

                console.log(binary)
                console.log(instruction)

                instructions.push({ Break: null, Address: "0x" + address.toString(16), Label: label , loaded: instruction, user: "", _rowVariant: ''});
                
                address = address + (4*architecture.instructions[i].nwords);

                found = true;
              }
            }
          }
        }
        if(!found){
          /*app._data.alertMessaje = 'Instruction "'+ token +'" not found';
          app._data.type ='danger';
          app._data.dismissCountDown = app._data.dismissSecs;*/

          alert('Instruction "'+ token +'" not found');

          existsInstruction = false;
          tokenIndex = 0;
        }
      }


















      for(var p = 0; p < pending_instructions.length; p++){
        var error = false;

        var instructionParts = pending_instructions[p].instruction.split(' ');
        var signature = pending_instructions[p].signature;
        var signatureRawParts = pending_instructions[p].signatureRaw;
        var i = pending_instructions[p].instIndex;

        var binary = "";
        binary = binary.padStart(architecture.instructions[pending_instructions[p].instIndex].nwords * 32, "0");

        var instruction ="";

        for(var j = 0; j < signature.length; j++){
          switch(signature[j]) {
            case "reg":
              token = instructionParts[j];

              console.log(token)

              var validReg = false;

              if(token.charAt(0)!= '$'){
                break;
              }

              var auxToken = token.substring(1,token.length);

              console.log("token " + auxToken)

              for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                  for(var z = 0; z < architecture_hash.length; z++){
                    for(var w = 0; w < architecture.components[z].elements.length; w++){
                      if(auxToken == architecture.components[z].elements[w].name){
                        validReg = true;

                        fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                        var reg = w;

                        binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (reg.toString(2)).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                        instruction = instruction + " " + token;

                        console.log((reg.toString(2)).padStart(fieldsLength, "0"))
                        console.log(binary)
                        console.log(instruction)

                      }
                      else if(z == architecture_hash.length-1 && w == architecture.components[z].elements.length-1 && validReg == false){
                        /*app._data.alertMessaje = 'Register "'+ token +'" not found';
                        app._data.type ='danger';
                        app._data.dismissCountDown = app._data.dismissSecs;*/

                        alert('Register "'+ token +'" not found');

                        error = true;
                      }
                    }
                  }
                }
              }

              break;
            case "inm":
              token = instructionParts[j];

              console.log(token)

              for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                  fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
              
                  var inm;

                  if(token.match(/^0x/)){
                    console.log("a")
                    var value = token.split("x");

                    if(value[1].length*4 > fieldsLength){
                      alert('Immediate number "'+ token +'" is too big')

                      error = true
                      break;
                    }

                    if(isNaN(parseInt(token, 16)) == true){
                      alert('Immediate number "'+ token +'" is not valid')
                    
                      error = true
                      break;
                    }

                    inm = (parseInt(token, 16)).toString(2);
                  }
                  else if (token.match(/^(\d)+\.(\d)+/)){
                    console.log("b")
                    if(this.float2bin(parseFloat(token)).length > fieldsLength){
                      alert('Immediate number "'+ token +'" is too big')

                      error = true
                      break;
                    }

                    if(isNaN(parseFloat(token)) == true){
                      alert('Immediate number "'+ token +'" is not valid')
                    
                      error = true
                      break;
                    }

                    inm = this.float2bin(parseFloat(token, 16));
                  }
                  else if(isNaN(parseInt(token))){
                    if(instructions.length == 0){
                      error = true;
                    }

                    for (var z = 0; z < instructions.length; z++){
                      if(token == instructions[z].Label){
                        var addr = (parseInt(instructions[z].Address, 16)).toString(2);

                        binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                        token = instructions[z].Address;
                        break;
                      }
                      else if(z == instructions.length-1){
                        error = true;
                      }  
                    }
                  }
                  else {
                    console.log("c")
                    var numAux = parseInt(token, 10);
                    if((numAux.toString(2)).length > fieldsLength){
                      alert('Immediate number "'+ token +'" is too big')

                      error = true
                      break;
                    }

                    if(isNaN(parseInt(token)) == true){
                      alert('Immediate number "'+ token +'" is not valid')
                    
                      error = true
                      break;
                    }

                    inm = (parseInt(token, 10)).toString(2);
                  }
                  if(validTagPC == true){
                    binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + inm.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                    console.log(inm.padStart(fieldsLength, "0"))
                  }
                  
                  instruction = instruction + " " + token;
                  console.log(instruction)
                  
                }
              }

              break;

            case "address":
              token = instructionParts[j];

              console.log(token)

              for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                  fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;

                  if(token.match(/^0x/)){
                    var value = token.split("x");

                    if(value[1].length*4 > fieldsLength){
                      alert('Address "'+ token +'" is too big')

                      error = true
                      break;
                    }

                    if(isNaN(parseInt(token, 16)) == true){
                      alert('Address "'+ token +'" is not valid')
                    
                      error = true
                      break;
                    }

                    addr = (parseInt(token, 16)).toString(2);
                  
                    binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                    instruction = instruction + " " + token;

                    console.log(instruction)
                  }
                  else{
                    var validTag = false;
                    for (var z = 0; z < memory.length; z++){
                      for (var w = 0; w < memory[z].Binary.length; w++){
                        if(token == memory[z].Binary[w].Tag){
                          addr = (memory[z].Binary[w].Addr).toString(2);

                          binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + addr.padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                          instruction = instruction + " " + token;

                          validTag = true;
                        }
                        if(z == memory.length-1 && w == memory[z].Binary.length-1 && validTag == false){
                          alert('Tag "'+ token +'" is not valid')
                    
                          error = true
                          break;
                        }
                      }
                    }
                  }
                }
              }
              
              break;

            case "(reg)":
              token = instructionParts[j];

              for(var a = 0; a < architecture.instructions[i].fields.length; a++){
                if("(" + architecture.instructions[i].fields[a].name + ")" == signatureRawParts[j]){
                  fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;

                  console.log("signatureRawParts[j]")

                  if(token.charAt(0) != '('){
                    alert('This field"'+ token +'" must start with a "("')
                    
                    error = true
                    break;
                  }

                  if(token.charAt(token.length-1) != ')'){
                    alert('This field"'+ token +'" must end with a ")"')
                    
                    error = true
                    break;
                  }
                  
                  re = /\((.*?)\)/;
                  if (token.search(re) != -1){
                    var match = re.exec(token);

                    var auxToken = match[0].substring(1,match[0].length-1);

                    validReg = false;

                    for(var z = 0; z < architecture_hash.length; z++){
                      for(var w = 0; w < architecture.components[z].elements.length; w++){
                        if(auxToken == "$" + architecture.components[z].elements[w].name){
                          validReg = true;
                          fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                          var reg = w;

                          binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (reg.toString(2)).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);
                          instruction = instruction + " " + token;

                          console.log((reg.toString(2)).padStart(fieldsLength, "0"))
                          console.log(binary)
                          console.log(instruction)
                        }
                        else if(z == architecture_hash.length-1 && w == architecture.components[z].elements.length-1 && validReg == false){
                          alert('Register "'+ match[0] +'" not found');

                          error = true;
                        }
                      }
                    }
                  }
                }
              }

              break;

            default:
              token = instructionParts[j];

              console.log(token)

              for(var a = 0; a < architecture.instructions[i].fields.length; a++){

                console.log(signatureRawParts[j])

                if(architecture.instructions[i].fields[a].name == signatureRawParts[j]){
                  fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;
                  
                  binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (architecture.instructions[i].co).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit), binary.length);

                  instruction = instruction + token;

                  console.log((architecture.instructions[i].co).padStart(fieldsLength, "0"))
                  console.log(binary)
                  console.log(instruction)
                }

                if(architecture.instructions[i].fields[a].type == "cop"){
                  fieldsLength = architecture.instructions[i].fields[a].startbit - architecture.instructions[i].fields[a].stopbit + 1;

                  binary = binary.substring(0, binary.length - (architecture.instructions[i].fields[a].startbit + 1)) + (architecture.instructions[i].cop).padStart(fieldsLength, "0") + binary.substring(binary.length - (architecture.instructions[i].fields[a].stopbit ), binary.length);

                  console.log((architecture.instructions[i].cop).padStart(fieldsLength, "0"))
                  console.log(binary)
                }
              }

              console.log("antes token")
            break;
          }
        }
        if(error == false){
          var padding = "";
          padding = padding.padStart((architecture.instructions[i].nwords*32)-(binary.length), "0");

          binary = binary + padding;

          console.log(binary)
          console.log(instruction)

          for(var pos = 0; pos < instructions.length; pos++){
            if(parseInt(instructions[pos].Address, 16) > pending_instructions[p].address){
              instructions.splice(pos, 0, { Break: null, Address: "0x" + pending_instructions[p].address.toString(16), Label: label , loaded: instruction, user: "", _rowVariant: ''});
              break;
            }
          }
        }
      }

      archChange = false;

      app._data.instructions = instructions;

      this.reset();
    },

    



















    /*PAGINA SIMULADOR*/
    /*Funciones de los popover*/
    popoverId(i){
      return 'popoverValueContent' + i;
    },

    /*Convierte de hexadecimal a float*/
    hex2float ( hexvalue ){
      var sign     = (hexvalue & 0x80000000) ? -1 : 1;
      var exponent = ((hexvalue >> 23) & 0xff) - 127;
      var mantissa = 1 + ((hexvalue & 0x7fffff) / 0x800000);

      var valuef = sign * mantissa * Math.pow(2, exponent);
      if (-127 == exponent)
        if (1 == mantissa)
          valuef = (sign == 1) ? "+0" : "-0" ;
        else valuef = sign * ((hexvalue & 0x7fffff) / 0x7fffff) * Math.pow(2, -126) ;
      if (128 == exponent)
        if (1 == mantissa)
          valuef = (sign == 1) ? "+Inf" : "-Inf" ;
        else valuef = "NaN" ;

      return valuef ;
    },

    hex2double ( hexvalue ){
      var value = hexvalue.split('x');
      var value_bit = '';

      for (var i = 0; i < value[1].length; i++) {
      	var aux = value[1].charAt(i);
      	aux = (parseInt(aux, 16)).toString(2).padStart(4, "0");
      	value_bit = value_bit + aux;
      }

	  	var buffer = new ArrayBuffer(8);
		  new Uint8Array( buffer ).set( value_bit.match(/.{8}/g).map( binaryStringToInt ) );
		  return new DataView( buffer ).getFloat64(0, false);
    },

    /*Convierte de hexadecimal a char*/
    hex2char8 ( hexvalue ){

    	var num_char = ((hexvalue.toString().length))/2;
    	var exponent = 0;
    	var pos = 0;

      var valuec = new Array();

      for (var i = 0; i < num_char; i++) {
        var auxHex = hexvalue.substring(pos, pos+2);
        valuec[i] = String.fromCharCode(parseInt(auxHex, 16));
        pos = pos + 2;
      }

      var characters = '';

      for (var i = 0; i < valuec.length; i++) {
        characters = characters + valuec[i] + ' ';
      }

      return  characters;
    },

    float2bin (number){
	    var i, result = "";
	    var dv = new DataView(new ArrayBuffer(4));

	    dv.setFloat32(0, number, false);

	    for (i = 0; i < 4; i++) {
	        var bits = dv.getUint8(i).toString(2);
	        if (bits.length < 8) {
	            bits = new Array(8 - bits.length).fill('0').join("") + bits;
	        }
	        result += bits;
	    }
	    return result;
    },

    double2bin(number) {
	    var i, result = "";
	    var dv = new DataView(new ArrayBuffer(8));

	    dv.setFloat64(0, number, false);

	    for (i = 0; i < 8; i++) {
	        var bits = dv.getUint8(i).toString(2);
	        if (bits.length < 8) {
	            bits = new Array(8 - bits.length).fill('0').join("") + bits;
	        }
	        result += bits;
	    }
	    return result;
		},

    bin2hex(s) {
	    var i, k, part, accum, ret = '';
	    for (i = s.length-1; i >= 3; i -= 4) {

	      part = s.substr(i+1-4, 4);
	      accum = 0;
	      for (k = 0; k < 4; k += 1) {
          if (part[k] !== '0' && part[k] !== '1') {     
              return { valid: false };
          }
          accum = accum * 2 + parseInt(part[k], 10);
	      }
	      if (accum >= 10) {
          ret = String.fromCharCode(accum - 10 + 'A'.charCodeAt(0)) + ret;
	      } else {
          ret = String(accum) + ret;
	      }
	    }

	    if (i >= 0) {
        accum = 0;
        for (k = 0; k <= i; k += 1) {
          if (s[k] !== '0' && s[k] !== '1') {
              return { valid: false };
          }
          accum = accum * 2 + parseInt(s[k], 10);
        }
        ret = String(accum) + ret;
	    }
	    return ret;
		},

    /*Modifica registros de doble precision segun los de simple*/
    updateDouble(comp, elem){
      for (var j = 0; j < architecture.components.length; j++) {
        for (var z = 0; z < architecture.components[j].elements.length && architecture.components[j].double_precision == true; z++) {
          if(architecture.components[j].elements[z].simple_reg[0] == architecture.components[comp].elements[elem].name){
            var simple = this.bin2hex(this.float2bin(architecture.components[comp].elements[elem].value));
            var double = this.bin2hex(this.double2bin(architecture.components[j].elements[z].value)).substr(8, 15);
            var newDouble = simple + double;

            architecture.components[j].elements[z].value = this.hex2double("0x"+newDouble);
          }
          if(architecture.components[j].elements[z].simple_reg[1] == architecture.components[comp].elements[elem].name){
            var simple = this.bin2hex(this.float2bin(architecture.components[comp].elements[elem].value));
            var double = this.bin2hex(this.double2bin(architecture.components[j].elements[z].value)).substr(0, 8);
            var newDouble = double + simple;

            architecture.components[j].elements[z].value = this.hex2double("0x"+newDouble);
          }
        }
      }
    },

    /*Modifica registros de simple precision segun los de doble*/
    updateSimple(comp, elem){
      var part1 = this.bin2hex(this.double2bin(architecture.components[comp].elements[elem].value)).substr(0, 8);
      var part2 = this.bin2hex(this.double2bin(architecture.components[comp].elements[elem].value)).substr(8, 15);

      for (var j = 0; j < architecture.components.length; j++) {
        for (var z = 0; z < architecture.components[j].elements.length; z++) {
          if(architecture.components[j].elements[z].name == architecture.components[comp].elements[elem].simple_reg[0]){
            architecture.components[j].elements[z].value = this.hex2float("0x"+part1);
          }
          if(architecture.components[j].elements[z].name == architecture.components[comp].elements[elem].simple_reg[1]){
            architecture.components[j].elements[z].value = this.hex2float("0x"+part2);
          }
        }
      }
    },

    /*FUNCIONES DE GESTION DE REGISTROS*/
    /*Actualiza el valor de un registro*/
    updateReg(comp, elem, type, precision){
      for (var i = 0; i < architecture.components[comp].elements.length; i++) {
        if(type == "integer" || type == "control"){
          if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^0x/)){
            var value = this.newValue.split("x");
            architecture.components[comp].elements[i].value = bigInt(value[1], 16);
          }
          else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^(\d)+/)){
            architecture.components[comp].elements[i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
          }
          else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^-/)){
            architecture.components[comp].elements[i].value = bigInt(parseInt(this.newValue) >>> 0, 10);
          }
        }
        else if(type =="floating point"){
          if(precision == false){
            
            if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^0x/)){
              architecture.components[comp].elements[i].value = this.hex2float(this.newValue);

              this.updateDouble(comp, i);
            }
            else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^(\d)+/)){
              architecture.components[comp].elements[i].value = parseFloat(this.newValue, 10);

              this.updateDouble(comp, i);
            }
            else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^-/)){
              architecture.components[comp].elements[i].value = parseFloat(this.newValue, 10);

              this.updateDouble(comp, i);
            }
          }

          else if(precision == true){
            if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^0x/)){
              architecture.components[comp].elements[i].value = this.hex2double(this.newValue);

              this.updateSimple(comp, i);
            }
            else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^(\d)+/)){
              architecture.components[comp].elements[i].value = parseFloat(this.newValue, 10);

              this.updateSimple(comp, i);
            }
            else if(architecture.components[comp].elements[i].name == elem && this.newValue.match(/^-/)){
              architecture.components[comp].elements[i].value = parseFloat(this.newValue, 10);

              this.updateSimple(comp, i)
            }
          }
        }
      }
      this.newValue = '';
    },

    /*FUNCIONES DE EJECUCION*/
    /*Funcion que ejecuta instruccion a instruccion*/
    executeInstruction(){

      if(instructions.length == 0){
        app._data.alertMessaje = 'No instructions in memory';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        return;
      }

      /*Verifica que el programa no ha finalizado ya*/
      if(executionIndex < -1){
        app._data.alertMessaje = 'The program has finished';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        return;
      }
      else if(executionIndex == -1){
        app._data.alertMessaje = 'The program has finished with errors';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
        return;
      }

      var error = 0;
      var index;

      for (var i = 0; i < instructions.length; i++) {
        if(parseInt(instructions[i].Address, 16) == architecture.components[0].elements[0].value){
          executionIndex = i;
          instructions[executionIndex]._rowVariant = 'info';
        }
        else{
          instructions[i]._rowVariant = '';
        }
      }

      var instructionExec = instructions[executionIndex].loaded;

      var instructionExecParts = instructionExec.split(' ');
      var signatureParts;
      var signatureRawParts;
      var auxDef;

      /*Busca la instruccion a ejecutar y coge la definicion*/
      for (var i = 0; i < architecture.instructions.length; i++) {
        var auxSig = architecture.instructions[i].signatureRaw.split(' ');

        if(architecture.instructions[i].name == instructionExecParts[0] && instructionExecParts.length == auxSig.length){
          signatureParts = architecture.instructions[i].signature.split(',');
          signatureRawParts = architecture.instructions[i].signatureRaw.split(' ');
          auxDef = architecture.instructions[i].definition;
          break;
        }
      }
      console.log(auxDef)

      /*Replaza los valores por el nombre de los registros*/
      for (var i = 1; i < signatureRawParts.length; i++){
        var re = new RegExp(signatureRawParts[i],"g");
        if(signatureParts[i] == "reg"){
          auxDef = auxDef.replace(re, instructionExecParts[i].substring(1, instructionExecParts[i].length));
        }
        else{
          auxDef = auxDef.replace(re, instructionExecParts[i]);
        }
      }

      console.log(auxDef)

      /*Remplaza el nombre del registro por su variable*/
      var regIndex = 0;

      for (var i = 0; i < architecture.components.length; i++){
        for (var j = 0; j < architecture.components[i].elements.length; j++){
          var re;

          /*Si es un regitro en el que se escribe*/
          re = new RegExp(architecture.components[i].elements[j].name+" *=[^=]");
          if (auxDef.search(re) != -1){
            re = new RegExp(architecture.components[i].elements[j].name+" *=","g");

            auxDef = auxDef.replace(re, "var reg"+ regIndex+"=");
            auxDef = "var reg" + regIndex + "=null\n" + auxDef
            auxDef = auxDef + "\n this.writeRegister(reg"+regIndex+","+i+" ,"+j+");"
            regIndex++;
          }

          /*Si es un registro de lectura*/
          re = new RegExp(architecture.components[i].elements[j].name,"g");
          auxDef = auxDef.replace(re, "this.readRegister("+i+" ,"+j+")");
        }
      }

      console.log(auxDef)

      /*Remplaza la direccion de memoria por su valor*/
      /*Replaces escritura en memoria por registro + desplazamiento*/
      re = /MP.([whb]).\((.*?)\)\) *=/;
      if (auxDef.search(re) != -1){
        var match = re.exec(auxDef);
        var auxDir;
        eval("auxDir="+match[2]+")");

        re = /MP.[whb].\((.*?)\)\) *=/g;
        auxDef = auxDef.replace(re, "var dir"+ auxDir +"=");
        auxDef = "var dir" + auxDir + "=null\n" + auxDef
        auxDef = auxDef + "\n this.writeMemory(dir"+auxDir+",'0x"+auxDir.toString(16)+"','"+match[1]+"');"
      }

      /*Replaces escritura en memoria por direccion y etiqueta*/
      re = new RegExp("MP.([whb]).(.*?) *=");
      if (auxDef.search(re) != -1){
        var match = re.exec(auxDef);

        re = new RegExp("MP."+match[1]+"."+match[2]+" *=","g");
        auxDef = auxDef.replace(re, "var dir"+ match[2]+"=");
        auxDef = "var dir" + match[2] + "=null\n" + auxDef
        auxDef = auxDef + "\n this.writeMemory(dir"+match[2]+",'"+match[2]+"','"+match[1]+"');"
      }

      /*Replaces lectura en memoria por registro + desplazamiento*/
      re = /MP.([whb]).\((.*?)\)\)/;
      if (auxDef.search(re) != -1){
        var match = re.exec(auxDef);
        var auxDir;

        eval("auxDir="+match[2]+"))");

        re = /MP.[whb].\((.*?)\)\)/g;
        auxDef = auxDef.replace(re, "this.readMemory('0x"+auxDir.toString(16)+"', '"+match[1]+"'");
      }

      /*Replaces lectura en memoria por direccion y etiqueta*/
      re = new RegExp("MP.([whb]).([0-9]*[a-z]*[0-9]*)");
      if (auxDef.search(re) != -1){
        var match = re.exec(auxDef);

        re = new RegExp("MP."+match[1]+"."+match[2],"g");
        auxDef = auxDef.replace(re, "this.readMemory('"+match[2]+"','"+match[1]+"')");
      }

      console.log(auxDef)

      try{
        eval(auxDef);
      }
      catch(e){
        if (e instanceof SyntaxError) {
          error = 1;
          instructions[executionIndex]._rowVariant = 'danger';
          executionIndex = -1;
          app._data.alertMessaje = 'Syntax Error';
          app._data.type ='danger';
          app._data.dismissCountDown = app._data.dismissSecs;
        }
      }
    
      if(error != 1){
        for (var i = 0; i < instructions.length; i++) {
          if(parseInt(instructions[i].Address, 16) == architecture.components[0].elements[0].value){
            executionIndex = i;
            instructions[executionIndex]._rowVariant = 'success';
            break;
          }
          else if(i == instructions.length-1){
            instructions[executionIndex]._rowVariant = '';
            executionIndex = instructions.length+1;
          }
        }
      }
    
      if(executionIndex >= instructions.length){
        executionIndex = -2;
        app._data.alertMessaje = 'The execution of the program has finished';
        app._data.type ='success';
        app._data.dismissCountDown = app._data.dismissSecs;
      }
      else{
        if(error != 1){
          instructions[executionIndex]._rowVariant = 'success';
        }
      }
    },

    /*Funcion que ejecuta todo el programa*/
    executeProgram(){
      var iter1 = 1;
      while(executionIndex >= 0){
        if(instructions[executionIndex].Break == true && iter1 == 0){
          return;
        }
        else{
          this.executeInstruction();
          iter1 = 0;
        }
      }
    },

    /*Funcion que resetea la ejecucion*/
    reset(){
      for (var i = 0; i < instructions.length; i++) {
        instructions[i]._rowVariant = '';
      }
      executionIndex = 0;
      instructions[executionIndex]._rowVariant = 'success';

      for (var i = 0; i < architecture_hash.length; i++) {
        for (var j = 0; j < architecture.components[i].elements.length; j++) {
          if(architecture.components[i].double_precision == false){
            architecture.components[i].elements[j].value = architecture.components[i].elements[j].default_value;
          }

          else{
            var aux_value;
            var aux_sim1;
            var aux_sim2;

            for (var a = 0; a < architecture_hash.length; a++) {
              for (var b = 0; b < architecture.components[a].elements.length; b++) {
                if(architecture.components[a].elements[b].name == architecture.components[i].elements[j].simple_reg[0]){
                  aux_sim1 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].default_value));
                }
                if(architecture.components[a].elements[b].name == architecture.components[i].elements[j].simple_reg[1]){
                  aux_sim2 = this.bin2hex(this.float2bin(architecture.components[a].elements[b].default_value));
                }
              }
            }

            aux_value = aux_sim1 + aux_sim2;

            architecture.components[i].elements[j].value = this.hex2double("0x" + aux_value);
          }
        }
      }

      for (var i = 0; i < memory.length; i++) {
        for (var j = 0; j < memory[i].Binary.length; j++) {
          memory[i].Binary[j].Bin = memory[i].Binary[j].DefBin;
        }
      }
    },

    /*Funcion que lee de los registro*/
    readRegister(indexComp, indexElem){
      /*Verifica que se puede leer el registro*/
      if(architecture.components[indexComp].elements[indexElem].properties[0] != "read" && architecture.components[indexComp].elements[indexElem].properties[1] != "read"){
        app._data.alertMessaje = 'The register '+ architecture.components[indexComp].elements[indexElem].name +' cannot be read';
        app._data.type ='danger';
        app._data.dismissCountDown = app._data.dismissSecs;
      }

      return architecture.components[indexComp].elements[indexElem].value;
    },

    /*Funcion que escribe en los registro*/
    writeRegister(value, indexComp, indexElem){

      if(value == null){
        return;
      }

      if(architecture.components[indexComp].type == "integer" || architecture.components[indexComp].type == "control"){
        /*Verifica que se puede escribir en el registro*/
        if(architecture.components[indexComp].elements[indexElem].properties[0] != "write" && architecture.components[indexComp].elements[indexElem].properties[1] != "write"){
          app._data.alertMessaje = 'The register '+ architecture.components[indexComp].elements[indexElem].name +' cannot be written';
          app._data.type ='danger';
          app._data.dismissCountDown = app._data.dismissSecs;
          return;
        }

        architecture.components[indexComp].elements[indexElem].value = bigInt(parseInt(value) >>> 0, 10);

        var button = '#popoverValueContent' + architecture.components[indexComp].elements[indexElem].name;

        $(button).attr("class", "btn btn-outline-secondary btn-block btn-sm modRegister");

        setTimeout(function() {
          $(button).attr("class", "btn btn-outline-secondary btn-block btn-sm registers");
        }, 350);
      }

      else if(architecture.components[indexComp].type =="floating point"){
        console.log(architecture.components[indexComp].double_precision)
        if(architecture.components[indexComp].double_precision == false){
          /*Verifica que se puede escribir en el registro*/
          if(architecture.components[indexComp].elements[indexElem].properties[0] != "write" && architecture.components[indexComp].elements[indexElem].properties[1] != "write"){
            app._data.alertMessaje = 'The register '+ architecture.components[indexComp].elements[indexElem].name +' cannot be written';
            app._data.type ='danger';
            app._data.dismissCountDown = app._data.dismissSecs;
            return;
          }

          architecture.components[indexComp].elements[indexElem].value = parseFloat(value, 10);

          this.updateDouble(indexComp, indexElem);

          var button = '#popoverValueContent' + architecture.components[indexComp].elements[indexElem].name;

          $(button).attr("style", "background-color:#c2c2c2;");

          setTimeout(function() {
            $(button).attr("style", "background-color:#f5f5f5;");
          }, 350);
        }
        
        else if(architecture.components[indexComp].double_precision == true){
          /*Verifica que se puede escribir en el registro*/
          if(architecture.components[indexComp].elements[indexElem].properties[0] != "write" && architecture.components[indexComp].elements[indexElem].properties[1] != "write"){
            app._data.alertMessaje = 'The register '+ architecture.components[indexComp].elements[indexElem].name +' cannot be written';
            app._data.type ='danger';
            app._data.dismissCountDown = app._data.dismissSecs;
            return;
          }
          architecture.components[indexComp].elements[indexElem].value = parseFloat(value, 10);

          this.updateSimple(indexComp, indexElem);

          var button = '#popoverValueContent' + architecture.components[indexComp].elements[indexElem].name;

          $(button).attr("style", "background-color:#c2c2c2;");

          setTimeout(function() {
            $(button).attr("style", "background-color:#f5f5f5;");
          }, 350);
        }
      }  
    },

    /*Funcion que lee de memoria*/
    readMemory(addr, type){
      var memValue = '';

      if (type == "w"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              for (var z = 0; z < memory[i].Binary.length; z++){
                memValue = memory[i].Binary[z].Bin + memValue;
              }
              return bigInt(memValue, 16);
            }
          }
        }
      }

      if (type == "h"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              if(j < 2){
                for (var z = 0; z < memory[i].Binary.length -2; z++){
                  memValue = memory[i].Binary[z].Bin + memValue;
                }
                return bigInt(memValue, 16);
              }
              else{
                for (var z = 2; z < memory[i].Binary.length; z++){
                  memValue = memory[i].Binary[z].Bin + memValue;
                }
                return bigInt(memValue, 16);
              }
            }
          }
        }
      }

      if (type == "b"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              memValue = memory[i].Binary[j].Bin + memValue;
              return bigInt(memValue, 16);
            }
          }
        }
      }
    },

    /*Funcion que escribe de memoria*/
    writeMemory(value, addr, type){

      if(value == null){
        return;
      }

      var memValue = (value.toString(16)).padStart(8, "0");

      if (type == "w"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              var charIndex = memValue.length-1;
              for (var z = 0; z < memory[i].Binary.length; z++){
                memory[i].Binary[z].Bin = memValue.charAt(charIndex-1)+memValue.charAt(charIndex);
                charIndex = charIndex - 2;
              }
              return;
            }
          }
        }
      }

      if (type == "h"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
               if(j < 2){
                  var charIndex = memValue.length-1;
                  for (var z = 0; z < memory[i].Binary.length - 2; z++){
                    memory[i].Binary[z].Bin = memValue.charAt(charIndex-1)+memValue.charAt(charIndex);
                    charIndex = charIndex - 2;
                  }
                  return;
                }
                else{
                  var charIndex = memValue.length-1;
                  for (var z = 2; z < memory[i].Binary.length; z++){
                    memory[i].Binary[z].Bin = memValue.charAt(charIndex-1)+memValue.charAt(charIndex);
                    charIndex = charIndex - 2;
                  }
                  return;
                }
            }
          }
        }
      }

      if (type == "b"){
        for (var i = 0; i < memory.length; i++){
          for (var j = 0; j < memory[i].Binary.length; j++){
            var aux = "0x"+(memory[i].Binary[j].Addr).toString(16);
            if(aux == addr || memory[i].Binary[j].Tag == addr){
              var charIndex = memValue.length-1;
              memory[i].Binary[j].Bin = memValue.charAt(charIndex-1)+memValue.charAt(charIndex);
              return;
            }
          }
        }
      }
    },

    breakPoint(record, index){
      console.log("break")

      if(instructions[index].Break == null){
        instructions[index].Break = true;
        app._data.instructions[index].Break = true;
      }
      else if(instructions[index].Break == true){
        instructions[index].Break = null;
        app._data.instructions[index].Break = null;
      }
    }

  },
  created(){
    this.load_arch_available();
  }
})

/*Cambia la vision de los registros*/
$("#selectData").change(function(){
  var value = document.getElementById("selectData").value;
  if(value == "CPU-FP Registers"){
    app._data.register_type = 'floating point';
    $("#registers").show();
    $("#memory").hide();
  }
  if(value == "CPU-INT Registers") {
    app._data.register_type = 'integer';
    $("#registers").show();
    $("#memory").hide();
  }
});

/*Obtiene la instruccion asociada al select*/
$(document).on('click','.fieldsSel',function(){
  var id = this.id;
  var inst = id.split('-');
  app._data.instSel = inst[inst.length-1];
});

/*Codemirror, text area ensamblador*/
// initialize codemirror for assembly
editor_cfg = {
  lineNumbers: true
} ;

textarea_assembly_obj = document.getElementById("textarea_assembly");

textarea_assembly_editor = CodeMirror.fromTextArea(textarea_assembly_obj, editor_cfg);

textarea_assembly_editor.setOption('keyMap', 'sublime') ; // vim -> 'vim', 'emacs', 'sublime', ...

textarea_assembly_editor.setValue("\n\n\n\n\n\n\n\n\n\n\n\n");
//textarea_assembly_editor.setSize("auto", "auto");
textarea_assembly_editor.refresh();
