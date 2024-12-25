// Ý nghĩa: mỗi class chỉ nên thực hiện một nhiệm vụ cụ thể

// vi phạm nguyên lý single responseibility principle
class BlogPost {
    title: string;
    content: string;
  
    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
    }
  
    // Methods related to content management
    createPost() {
      // Implementation here
    }
  
    updatePost() {
      // Implementation here
    }
  
    deletePost() {
      // Implementation here
    }
  
    // Method related to post display
    displayHTML() {
      return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
  }

  // tuân thủ nguyên lý single responseibility principle
class BlogPost {
    title: string;
    content: string;

    constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    }

    // Methods related to content management
    createPost() {
    // Implementation here
    }

    updatePost() {
    // Implementation here
    }

    deletePost() {
    // Implementation here
    }
}

class BlogPostViewer {
    blogPost: BlogPost;

    constructor(blogPost: BlogPost) {
    this.blogPost = blogPost;
    }

    // Method related to post display
    displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
    }
}