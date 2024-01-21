const db = require('../db');
const { nanoid } = require('nanoid');

class Url {
  async set(url) {
    const id = nanoid(5).toLowerCase();
    try {
      const newUrlObj = await db.url.create({
        data: {
          id,
          target: url,
          timesVisited: 0
        }
      });
      
      return newUrlObj;
    } catch (error) {
      console.error(error);
    }
  }

  async get(id) {
    try {
      const urlObj = await db.url.findUnique({
        where: {
          id
        }
      });

      return urlObj;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id, data) {
    try {
      const updatedUrl = await db.url.update({
        where: {
          id
        },
        data
      });

      return updatedUrl;
    } catch (error) {
      console.error(error);
    }
  }

  async getMostVisited() {
    const urlList = await db.url.findMany({
      take: 10,
      orderBy: {
        timesVisited: 'desc'
      }
    });

    return urlList;
  }

  async delete(id) {
    try {
      const deletedUrl = await db.url.delete({
        where: {
          id
        }
      });
      
      return deletedUrl;
    } catch (error) {
      console.log(error);   
    }
  }
}

module.exports = Url;