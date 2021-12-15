

export default class BikesEntity {
    constructor() {
      this.page = 0;
      this.per_page = 0;
      this.location = "";
      this.serial = "";
    }

    setPage(page) {
      this.page = page;
      return this;
    }
    setPerPage(per_page) {
      this.per_page = per_page;
      return this;
    }
    setLocation(location) {
      this.location = location;
      return this;
    }
    setSerial(serial) {  
      this.serial = serial;
      return this;
    }
    build() {
        return {
            page : this.page,
            per_page : this.per_page,
            location : this.location,
            serial : this.serial
        };
      }
  }