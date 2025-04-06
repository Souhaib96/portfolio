'use client';
import { useMemo } from 'react';
import { Pagination as PaginationUI, PaginationContent, PaginationEllipsis, PaginationItem as PaginationItemUI , PaginationLink, PaginationNext as PaginationNextUI, PaginationPrevious as PaginationPreviousUI } from "@/components/ui/pagination";
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';


type PaginationComponentProps = {
  currentPage: number,
  totalPages: number
}

type PaginationProps = {
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
}

type PaginationItemProps = {
  page: number,
  active?: boolean,
  disabled?: boolean,
  onClick: (page: number) => void
}

type PaginationItemActionProps = {
  page: number,
  disabled?: boolean,
  onClick: (page: number) => void
}

const PaginationItem = (props: PaginationItemProps) => {
  const onClick = () => {
    if (!props.active && !props.disabled) {
      props.onClick(props.page);
    }
  }
  return (
    // Todo: if active is true, add the active class to the PaginationItem, no onClick event
    // Todo: if disabled is true, add the disabled class to the PaginationItem, no onClick event
    <PaginationItemUI onClick={onClick}>
      <PaginationLink isActive={props.active}>
      {props.page}
      </PaginationLink>

    </PaginationItemUI>
  );

}

const PaginationNext = (props: PaginationItemActionProps) => {
  const onClick = () => {
    if (!props.disabled) {
      props.onClick(props.page);
    }
  }
  const disabled = useMemo(() => {
    return props.disabled ;
  }, [props.disabled]);
  return (
    <PaginationItemUI onClick={onClick}>
      <PaginationNextUI isDisabled={disabled}/>
    </PaginationItemUI>
  );
}

const PaginationPrevious = (props: PaginationItemActionProps) => {
  const onClick = () => {
    if (!props.disabled) {
      props.onClick(props.page);
    }
  }
  const disabled = useMemo(() => {
    return props.disabled ;
  }, [props.disabled]);
  return (
    <PaginationItemUI onClick={onClick}>
      <PaginationPreviousUI isDisabled={disabled}/>
    </PaginationItemUI>
  );
}



const Pagination = (props: PaginationProps) => {
  const currentPage= useMemo(() => {
    return props.currentPage > 0 ? props.currentPage : 1;
  }, [props.currentPage]);

  return (
      <PaginationUI>
      <PaginationContent >

        <PaginationPrevious 
        onClick={()=>props.onPageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
        page={props.currentPage - 1}
        />


        {
          currentPage !== 1 && props.totalPages > 1 &&
          <PaginationItem
          page={1}
          onClick={props.onPageChange}
          />
        }

        {
          currentPage > 3 && props.totalPages > 2 &&
          <PaginationEllipsis className='m-0'/>
        }

        {
          currentPage > 2 && props.totalPages >= currentPage &&
          <PaginationItem
          page={currentPage - 1}
          onClick={props.onPageChange}
          />
        }

        {
          currentPage <= props.totalPages &&
          <PaginationItem
          page={currentPage}
          active={true}
          onClick={props.onPageChange}
          />
        }

        {
          currentPage < props.totalPages - 1 &&
          <PaginationItem
          page={currentPage + 1}
          onClick={props.onPageChange}
          />
        }

        {
          currentPage < props.totalPages - 2 &&
          <PaginationEllipsis />
        }

        {
          currentPage !== props.totalPages &&
          <PaginationItem
          page={props.totalPages}
          onClick={props.onPageChange}
          />
        }

        <PaginationNext
        onClick={()=>props.onPageChange(props.currentPage + 1)}
        disabled={props.currentPage >= props.totalPages}
        page={props.currentPage + 1}
        />

      </PaginationContent>
    </PaginationUI>
  );
}

const PaginationComponent = (props: PaginationComponentProps) => {
  
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  
  const onPageChange = (page: number) => {
    if (page > 0 && page <= props.totalPages) {
      // Todo: update the page query parameter
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set('page', page.toString());
      router.push(pathName + '?' + newSearchParams.toString());
    }
  }
  return (
    <Pagination
    currentPage={props.currentPage}
    totalPages={props.totalPages}
    onPageChange={onPageChange}
    />
  );
}



export default PaginationComponent;