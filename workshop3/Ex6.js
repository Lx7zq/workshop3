class Resident {
    name = "";
    address = "";
    rent = "";
    constructor(name, address, rent) {
        this.name = name; // ชื่อของผู้อยู่อาศัย
        this.address = address; // ที่อยู่ของผู้อยู่อาศัย
        this.rent = rent;
    }
}

class Condo extends Resident {
    amenities = "";
    roomnumber = "";
    constructor(name, address, rent, amenities, roomnumber) {
        super(name, address, rent);
        this.rent = rent; // ค่าเช่าของคอนโด
        this.amenities = amenities; // สิ่งอำนวยความสะดวกของคอนโด
        this.roomnumber = roomnumber;
    }

  
}

class TownHouse extends Resident {
    numFloors = 0;
    constructor(name, address, rent, numFloors) {
        super(name, address, rent);
        this.rent = rent; // ค่าเช่าของทาวน์เฮาส์
        this.numFloors = numFloors; // จำนวนชั้นของทาวน์เฮาส์
    }

  
}

class House extends Resident {
    backyardArea = 0;
    HouseArea = 0;
    constructor(name, address, rent, backyardArea, HouseArea) {
        super(name, address, rent);
        this.rent = rent; // ค่าเช่าของบ้านเดี่ยว
        this.backyardArea = backyardArea; // พื้นที่สนามหลังบ้าน
        this.HouseArea = HouseArea;
    }


}
