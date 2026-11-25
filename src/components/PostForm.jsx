import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../api.js';
import Panel from './Panel.jsx';

function PostForm() {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      setTitle('');
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === '' || mutation.isPending) return;
    mutation.mutate({ title, author: '나', likes: 0 });
  }

  return (
    <Panel title="글쓰기">
      <form className="form-row" onSubmit={handleSubmit}>
        <input
          aria-label="제목"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목"
        />
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? '등록 중...' : '등록'}
        </button>
      </form>
      {mutation.isError && (
        <p className="empty" role="alert">
          등록하지 못했습니다: {mutation.error.message}
        </p>
      )}
    </Panel>
  );
}

export default PostForm;
